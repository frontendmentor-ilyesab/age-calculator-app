import NumberDisplay from "@/app/components/numberdisplay";
import type { State } from "@/app/types";

interface AgeDisplayProps {
  years: State;
  months: State;
  days: State;
}

export default function AgeDisplay({ years, months, days }: AgeDisplayProps) {
  return (
    <h1 className="xs:text-5xl text-4xl font-extrabold italic leading-[1.1] text-black-off sm:text-7xl md:text-8xl lg:text-[7.5rem]">
      <NumberDisplay type="years" number={years} />
      <NumberDisplay type="months" number={months} />
      <NumberDisplay type="days" number={days} />
    </h1>
  );
}
