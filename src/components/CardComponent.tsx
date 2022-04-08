import React from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";
import dayjs from "dayjs";

interface ContainerProps {
    Date: Date;
}

const CardComponent: React.FC<ContainerProps> = ({Date}) => {
    const format = (value: any) => {
        return dayjs(value).format("D MMMM YYYY");
    }
    return(
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>
                    {format(Date)}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>physical: 83%</p>
                <p>emotional: 77%</p>
                <p>interact: 23%</p>
            </IonCardContent>
        </IonCard>

    );
};

export default CardComponent;
