import AgeInput from "@/app/components/ageinput";
import SubmitButton from "@/app/components/submitbutton";

import { useState } from "react";
import clsx from "clsx";

import {
  isValidDate,
  calculateAge,
  isDateInTheFuture,
  someValueExist,
} from "@/app/utils";

type formState = {
  day: string;
  month: string;
  year: string;
};

const initialState: formState = {
  day: "",
  month: "",
  year: "",
};

export default function AgeForm({
  onSuccess,
}: {
  onSuccess: (years: number, months: number, days: number) => void;
}) {
  const [Errors, setErrors] = useState(initialState);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    let errors: { [index: string]: string } = { day: "", month: "", year: "" };

    if (!form.checkValidity()) {
      const dateTerms = Object.keys(errors);
      for (let term of dateTerms) {
        const input = document.getElementById(term);
        if (input instanceof HTMLInputElement) {
          const { valueMissing, rangeOverflow, rangeUnderflow } =
            input.validity;
          if (valueMissing) {
            errors[term] = "This field is required";
          } else if (rangeOverflow || rangeUnderflow) {
            errors[term] = "Must be a valid " + term;
          }
        }
      }
    }

    const formdata = new FormData(form);
    const day = Number(formdata.get("day"));
    const month = Number(formdata.get("month"));
    const year = Number(formdata.get("year"));
    const termInfuture = isDateInTheFuture(year, month, day);

    if (!isValidDate(year, month, day) && errors["day"] === "") {
      errors["day"] = "Must be a valid date";
    }
    if (termInfuture && errors[termInfuture] === "") {
      errors[termInfuture] = "Must be in the past";
    }
    if (someValueExist(errors)) {
      setErrors({ ...Errors, ...errors });
    } else {
      setErrors(initialState);
      onSuccess(...calculateAge(year, month, day));
    }
  }

  const formInvalid = someValueExist(Errors);

  return (
    <form
      className={clsx("group/form", {
        invalid: formInvalid,
      })}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <div className="grid grid-cols-3 items-start gap-x-4 sm:max-w-[76%] lg:gap-x-10">
        <AgeInput type="day" error={Errors.day} />
        <AgeInput type="month" error={Errors.month} />
        <AgeInput type="year" error={Errors.year} />
      </div>
      <SubmitButton />
    </form>
  );
}
