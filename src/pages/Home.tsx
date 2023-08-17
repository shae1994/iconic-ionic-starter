// Navbar.tsx
import React from 'react';
import {IonButton, IonContent, IonHeader, IonPage, IonToolbar} from '@ionic/react';
import './Home.css';
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
    return (
 <IonPage>
      <IonHeader>
          <Navbar/>
      </IonHeader>

          <IonContent>
              <div className="experiment-message">
                  <p>Hey there! Welcome to my Ionic experimentation playground. I'm diving into the world of Ionic,
                      testing out different ideas and features. It's a casual and fun journey, just me and my code,
                      exploring what this awesome framework can do. No pressure, no deadlines, just experimentation
                      at its finest!</p>
              </div>
          </IonContent>
      </IonPage>


    );
};

export default Home;
