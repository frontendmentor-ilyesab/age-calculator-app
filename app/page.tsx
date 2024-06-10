"use client";

import AgeForm from "@/app/components/ageform";
import AgeDisplay from "@/app/components/agedisplay";

import { useState } from "react";

import type { State } from "@/app/types";

export default function Home() {
  const [years, setYears] = useState<State>("- -");
  const [months, setMonths] = useState<State>("- -");
  const [days, setDays] = useState<State>("- -");

  function handleSuccess(years: number, months: number, days: number) {
    setYears(years);
    setMonths(months);
    setDays(days);
  }

  return (
    <main className="xs:px-6 max-w-md rounded-3xl rounded-br-[6rem] bg-white px-4 py-12 sm:max-w-none sm:rounded-br-[8rem] md:max-w-2xl lg:max-w-[950px] lg:rounded-br-[14rem] lg:p-14">
      <AgeForm onSuccess={handleSuccess} />
      <AgeDisplay years={years} months={months} days={days} />
    </main>
  );
}
