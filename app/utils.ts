export function calculateAge(year: number, month: number, day: number): [number, number, number] {
    let years, months, days;
    const now = new Date();
    const [nowYears, nowMonths, nowDays] = [
      now.getFullYear(),
      now.getMonth() + 1,
      now.getDate(),
    ];
    years = nowYears - year;
    months = nowMonths - month;
    days = nowDays - day;
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    if (days < 0) {
      months -= 1;
      days += getLastDayOfMonth(now.getFullYear(), now.getMonth());
    }
    return [years, months, days];
  }
  
export function isValidDate(year: number, month: number, day: number) {
    const date = new Date(year, month - 1, day);
    const dayCorrected = date.getDate();
    if (dayCorrected !== day) {
        return false;
    }
    return true;
}

export function isDateInTheFuture(year: number, month: number, day: number) {
    const now = new Date();
    const [nowYears, nowMonths, nowDays] = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
        if (year > nowYears) {
            return "year";
        } else if (month > nowMonths && year === nowYears) {
            return "month";
        } else if (day > nowDays && nowMonths === month && year === nowYears) {
            return "day";
        } else {
            return null;
        }
}
 
export function someValueExist(obj: {}) {
    return Object.values(obj).some((value) => value !== "");
}
  
function getLastDayOfMonth(year: number, month: number): number {
    for (let day of [31, 30, 29, 28]) {
      if (isValidDate(year, month, day)) {
        return day;
      }
    }
    return 0;
}

export function generateClassForFixingNumbersDisplay(number: number) {

  const numbersToAdjustMargins: { [index: string]: string | string[] } = {
    "1": ["-me-3", "lg:-me-6"],
    "2": "-me-1",
    "3": "-me-0.5",
    "7": "-me-1",
  };

  const numberArr = Array.from(number.toString());

  const numberToAdjustPositions: { [index: string]: number[] } = {};

  let index = -1;

  let positionClass = "";

  while (true) {
    index = numberArr.findIndex(
      (elem, i) =>
        Object.keys(numbersToAdjustMargins).includes(elem) && i > index,
    );
    if (index !== -1) {
      if (!numberToAdjustPositions[numberArr[index]]) {
        numberToAdjustPositions[numberArr[index]] = [];
      }
      numberToAdjustPositions[numberArr[index]].push(index + 1);
    } else {
      break;
    }
  }

  for (const [number, positions] of Object.entries(numberToAdjustPositions)) {
    const margins = numbersToAdjustMargins[number];
    for (let pos of positions) {
      if (Array.isArray(margins)) {
        for (let margin of margins) {
          positionClass += `nth-${pos}:${margin} `;
        }
      } else {
        positionClass += `nth-${pos}:${numbersToAdjustMargins[number]} `;
      }
    }
  }

  return positionClass;
}