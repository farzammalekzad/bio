import dayjs from "dayjs";


export const format = (value: any) => {
    return dayjs(value).format("D MMM");
}

export const Biorhythm = (birthDate: any, targetDate: any, cycle: number) => {
    const birthDateCalc = dayjs(birthDate).startOf('day');
    const targetDateCalc = dayjs(targetDate).startOf('day');
    const diff = targetDateCalc.diff(birthDateCalc, 'days');
    return Math.sin((2 * Math.PI * diff) / cycle);

}

export const Biorhythms = (birthdate: any, targetDate: any) => {
    return {
        date: targetDate,
        physical: Biorhythm(birthdate, targetDate, 23),
        emotional: Biorhythm(birthdate, targetDate, 28),
        intellectual: Biorhythm(birthdate, targetDate, 33)
    }
}
export const BiorhythmsSeries = (birthDate, targetDate, day) => {
    const series = [];
    const validTargetDate = dayjs(targetDate).startOf('day');
    const newDate = validTargetDate.subtract(day, 'days')
    for (let i=0; i<=2*day; i++) {
        const calcDate = newDate.add(i, 'day').toISOString();
        series.push(Biorhythms(birthDate, calcDate));
    }
    console.log(series);

    return series;
}
