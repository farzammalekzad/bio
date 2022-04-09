import {
    IonButton,
    IonContent,
    IonDatetime,
    IonHeader, IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonPage, IonPopover,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import dayjs from "dayjs";
import './Home.css';
import React, {useState} from "react";
import {calendar} from "ionicons/icons";
import CardComponent from "../components/CardComponent";
import {format} from "../components/CardComponent";

const Home: React.FC = () => {

    const [selectedDate, setSelectedDate] = useState<any | null>('1986-08-11');
    const [targetDate, setTargetDate] = useState<any | null>('2022-08-11');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Biorhythms
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="floating">Date of Birth:</IonLabel>
                    <IonInput id="date-input-1" value={format(selectedDate)}/>
                    <IonButton fill="clear" id="open-date-input-1">
                        <IonIcon icon={calendar}/>
                    </IonButton>
                    <IonPopover trigger="open-date-input-1">
                        <IonDatetime presentation="date" value={selectedDate}
                                     onIonChange={(event) => setSelectedDate(event.detail.value)}/>
                    </IonPopover>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Target Date:</IonLabel>
                    <IonInput id="date-input-2" value={format(targetDate)}/>
                    <IonButton fill="clear" id="open-date-input-2">
                        <IonIcon icon={calendar}/>
                    </IonButton>
                    <IonPopover trigger="open-date-input-2">
                        <IonDatetime presentation="date" value={targetDate}
                                     onIonChange={(event) => setTargetDate(event.detail.value)}/>
                    </IonPopover>
                </IonItem>
                <CardComponent Date={selectedDate} targetDate={targetDate} />
            </IonContent>

        </IonPage>
    );
};

export default Home;
