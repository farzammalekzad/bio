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

const Home: React.FC = () => {

    const [selectedDate, setSelectedDate] = useState<any | null>('1986-08-11');
    const format = (value: any) => {
        return dayjs(value).format("D MMMM YYYY");
    }

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
                    <IonInput id="date-input-2" value={format(selectedDate)}/>
                    <IonButton fill="clear" id="open-date-input">
                        <IonIcon icon={calendar}/>
                    </IonButton>
                    <IonPopover trigger="open-date-input">
                        <IonDatetime presentation="date" value={selectedDate}
                                     onIonChange={(event) => setSelectedDate(event.detail.value)}/>
                    </IonPopover>
                </IonItem>
                <CardComponent Date={selectedDate}/>
            </IonContent>

        </IonPage>
    );
};

export default Home;
