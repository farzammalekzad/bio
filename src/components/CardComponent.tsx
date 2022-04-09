import React from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";
import dayjs from "dayjs";
import {Biorhythms} from "../functions/calc";


interface ContainerProps {
    Date: Date;
    targetDate: Date;
}
export const format = (value: any) => {
    return dayjs(value).format("D MMMM YYYY");
}

const CardComponent: React.FC<ContainerProps> = ({Date, targetDate}) => {
    const {physical, emotional, intellectual} = Biorhythms(Date, targetDate);



    return(
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>
                    {format(Date)}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>physical: {Math.round(physical * 100)}%</p>
                <p>emotional: {Math.round(emotional * 100)}%</p>
                <p>intellectual: {Math.round(intellectual * 100)}%</p>
            </IonCardContent>
        </IonCard>

    );
};

export default CardComponent;
