// Products.tsx
import React from 'react';
import {
    IonCard, IonCardContent, IonCardHeader,
    IonCardSubtitle, IonCardTitle, IonContent,
    IonHeader, IonImg, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import './Products.css';
import Navbar from "../components/Navbar";

const Products: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
               <Navbar/>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Products</IonTitle>
                    </IonToolbar>
                </IonHeader>



                <IonContent>

                    <div className="humorous-text">
                        <h1>Unbelievable Offer: These Masterpieces Could Be Yours!*</h1>
                    </div>


                    <div className="grid-container">
                        <IonCard className="grid-item">
                            <IonImg src="/assets/images/Legit-mona-lisa.jpeg" className={'card-image'}></IonImg>
                            <IonCardHeader>
                                <IonCardTitle>The Mona Lisa By Leonardo da Vinci</IonCardTitle>
                                <IonCardSubtitle>
                                    Mona Lisa's got that 'I'm-still-waiting-for-my-paint-to-dry' kind of patience.
                                </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Price: 5 Billion JMD
                            </IonCardContent>
                        </IonCard>

                        <IonCard className="grid-item">
                            <IonImg src="/assets/images/Legit-girl-with-pearl.jpeg" className={'card-image'}></IonImg>
                            <IonCardHeader>
                                <IonCardTitle>The Girl with the Pearl Earring By Johannes Vermeer</IonCardTitle>
                                <IonCardSubtitle>
                                    She's got the 'pearl-fect' accessory to make any mermaid jealous.
                                </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Price: 800 Million JMD
                            </IonCardContent>
                        </IonCard>

                        <IonCard className="grid-item">
                            <IonImg src="/assets/images/Legit-the-kiss.jpeg" className={'card-image'}></IonImg>
                            <IonCardHeader>
                                <IonCardTitle>The Kiss By Gustav Klimt</IonCardTitle>
                                <IonCardSubtitle>
                                    Klimt's 'The Kiss' – when love meets art, it's a brush with passion.
                                </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Price: 300 Million JMD
                            </IonCardContent>
                        </IonCard>

                        <IonCard className="grid-item">
                            <IonImg src="/assets/images/Legit-Starry-Night.jpeg" className={'card-image'}></IonImg>
                            <IonCardHeader>
                                <IonCardTitle>The Starry Night by Vincent van Gogh</IonCardTitle>
                                <IonCardSubtitle>
                                    Van Gogh's 'Starry Night' – where the sky isn't the limit, it's the masterpiece.
                                </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Price: 1.2 Billion JMD
                            </IonCardContent>
                        </IonCard>
                    </div>

                    <p className={'humorous-text-bottom'}>*Disclaimer: "Yours" meaning in your dreams or your virtual gallery!</p>
                </IonContent>
            </IonContent>
        </IonPage>

    );
};

export default Products;
