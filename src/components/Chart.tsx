import React from "react";
import {ResponsiveContainer, LineChart, Line, XAxis, ReferenceLine, CartesianGrid} from 'recharts'
import dayjs from "dayjs";
import {Biorhythms, BiorhythmsSeries, format} from "../functions/calc";


interface ContainerProps {
    Date: any,
    targetDate: any
}



const Chart: React.FC<ContainerProps> = ({Date, targetDate}) => {
    const data = BiorhythmsSeries(Date, targetDate, 15).map((item) => (
        {...item, date: format(item.date)}
    ));

    console.log(data[15].date);
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey="date"
                ticks={[data[3].date, data[15].date, data[27].date]}
                />
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>

                <ReferenceLine x={data[15].date}/>
                <Line type="natural" dot={false} dataKey="physical" stroke="green"/>
                <Line type="natural" dot={false} dataKey="emotional" stroke="red"/>
                <Line type="natural" dot={false} dataKey="intellectual" stroke="blue"/>
            </LineChart>
        </ResponsiveContainer>

    );
};

export default Chart;
