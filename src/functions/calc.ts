import React from "react";
import dayjs from "dayjs";

export const Biorhythm = (birthDate: any, targetDate: any, cycle: number) => {
    const birthDateCalc = dayjs(birthDate).startOf('day');
    const targetDateCalc = dayjs(targetDate).startOf('day');
    const diff = targetDateCalc.diff(birthDateCalc, 'days');
    return Math.sin((2 * Math.PI * diff) / cycle);

}

export const Biorhythms = (birthdate: any, targetDate: any) => {
    return {
        physical: Biorhythm(birthdate, targetDate, 23),
        emotional: Biorhythm(birthdate, targetDate, 28),
        intellectual: Biorhythm(birthdate, targetDate, 33)
    }
}
