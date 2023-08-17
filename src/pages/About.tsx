// About.tsx
import React, { useState } from 'react';
import {
    IonButton, IonContent, IonHeader,
    IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import './About.css';
import Navbar from "../components/Navbar";

const About: React.FC = () => {
    const [backgroundChanged, setBackgroundChanged] = useState(false);

    const handleButtonPress = () => {
        setBackgroundChanged(true);
    };

    return (


            <IonPage>

                <IonHeader>
                    <Navbar/>
                    {/*<IonToolbar>*/}
                    {/*    <IonTitle>About</IonTitle>*/}
                    {/*</IonToolbar>*/}
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Meet Me</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <div className="centered-div">
                        <div className="circular-image-container">
                            <img src="/assets/images/Juddy.jpeg" alt="juddy" />
                        </div>
                    </div>

                    <div className="centered-items">
                        <h3>Juddy-Shae Wallace</h3>
                        <h4>Team Algorithm Alchemist</h4>
                        <p>Greetings! I'm a UWI graduate holding a BSc Double Major in Computer Science and Statistics.
                            My heart belongs to the realm of data, 3D modeling, and UI design, where I weave creativity
                            into captivating digital experiences. When I'm not crafting in the digital world, I indulge
                            in the pleasures of pastries and find solace in the nostalgia of old television reruns.</p>

                    </div>

                </IonContent>

            </IonPage>

    );
};

export default About;
