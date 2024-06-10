import NumberDisplay from "@/app/components/numberdisplay";
import type { State } from "@/app/types";

interface AgeDisplayProps {
  years: State;
  months: State;
  days: State;
}

export default function AgeDisplay({ years, months, days }: AgeDisplayProps) {
  return (
    <h1 className="text-4xl font-extrabold italic leading-[1.1] text-black-off xs:text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem]">
      <NumberDisplay type="years" number={years} />
      <NumberDisplay type="months" number={months} />
      <NumberDisplay type="days" number={days} />
    </h1>
  );
}
