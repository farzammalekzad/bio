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
import {Hook} from "../functions/hooks";

const Home: React.FC = () => {

    const [selectedDate, setSelectedDate] = Hook('birthDate', '');
    const [targetDate, setTargetDate] = useState<any | null>(new Date().toISOString());

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
                {selectedDate &&
                <CardComponent Date={selectedDate} targetDate={targetDate} />
                }
                <IonItem>
                    <IonLabel position="fixed">Date of Birth:</IonLabel>
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

            </IonContent>

        </IonPage>
    );
};

export default Home;
