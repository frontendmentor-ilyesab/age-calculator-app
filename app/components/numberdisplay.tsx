import clsx from "clsx";
import dynamic from "next/dynamic";

const AnimatedNumber = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
  loading: () => <span className="text-purple">- -</span>,
});

import type { State } from "@/app/types";

import { generateClassForFixingNumbersDisplay } from "@/app/utils";

interface NumberDisplayProps {
  number: State;
  type: "years" | "months" | "days";
}

export default function NumberDisplay({ number, type }: NumberDisplayProps) {
  let content;

  if (number === "- -") {
    content = <span className="text-purple">{number}</span>;
  } else {
    const positionClass = generateClassForFixingNumbersDisplay(number);
    content = (
      <AnimatedNumber
        className={clsx("text-purple", {
          [positionClass]: positionClass !== "",
        })}
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
        })}
        animateToNumber={number}
      />
    );
  }

  return (
    <div className="flex items-center gap-2">
      {content}
      <span>{type}</span>
    </div>
  );
}
