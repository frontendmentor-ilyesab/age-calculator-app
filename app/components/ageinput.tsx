import React from "react";

interface ageInputProps {
  type: "day" | "month" | "year";
  error?: string;
}

const inputInfo = {
  day: {
    placeholder: "DD",
    min: 1,
    max: 31,
    length: 2,
  },
  month: {
    placeholder: "MM",
    min: 1,
    max: 12,
    length: 2,
  },
  year: {
    placeholder: "YYYY",
    min: "",
    max: "",
    length: 4,
  },
};

export default function ageInput({ type, error }: ageInputProps) {
  function handleBeforeInput(e: React.CompositionEvent<HTMLInputElement>) {
    const input = e.currentTarget;
    const inputLength = input.value.length;
    if (!isFinite(Number(e.data)) || inputLength >= inputInfo[type].length) {
      e.preventDefault();
    }
  }
  return (
    <div className="grid gap-1 lg:gap-2">
      <label
        className="text-xs font-bold uppercase tracking-[.25em] text-grey-smokey group-[.invalid]/form:text-red sm:text-base"
        htmlFor={type}
      >
        {type}
      </label>
      <input
        className="xs:px-4 xs:text-lg w-full appearance-none rounded-lg border border-grey-light px-2 py-3 text-base font-extrabold placeholder:tracking-wider focus:cursor-pointer focus:border-purple focus:caret-purple focus:outline-none group-[.invalid]/form:border-red sm:text-2xl lg:px-6 lg:text-[2rem]"
        id={type}
        name={type}
        placeholder={inputInfo[type].placeholder}
        type="number"
        step="any"
        min={inputInfo[type].min}
        max={inputInfo[type].max}
        onBeforeInput={handleBeforeInput}
        required
      />
      <span className="text-center text-xs italic text-red sm:text-left sm:text-sm lg:text-base">
        {error}
      </span>
    </div>
  );
}
