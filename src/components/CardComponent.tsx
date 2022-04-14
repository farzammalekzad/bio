import React from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";
import dayjs from "dayjs";
import {Biorhythms} from "../functions/calc";
import Chart from "./Chart";
import './CardComponent.css';


interface ContainerProps {
    Date: any;
    targetDate: any;
}
export const format = (value: any) => {
    return dayjs(value).format("D MMMM YYYY");
}

const CardComponent: React.FC<ContainerProps> = ({Date, targetDate}) => {
    const {physical, emotional, intellectual} = Biorhythms(Date, targetDate);



    return(
        <IonCard className="bio-card ion-text-center">
            <IonCardHeader>
                <IonCardTitle>
                    {format(targetDate)}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <Chart Date={Date} targetDate={targetDate}/>
                <p className="physical">physical: {Math.round(physical * 100)}%</p>
                <p className="emotional">emotional: {Math.round(emotional * 100)}%</p>
                <p className="intellectual">intellectual: {Math.round(intellectual * 100)}%</p>
            </IonCardContent>
        </IonCard>

    );
};

export default CardComponent;
