import React from 'react';
import {IonButton,IonToolbar} from "@ionic/react";



const Navbar=()=>{

    return(
        <IonToolbar>
            <div className="navbar">
                <div className="nav-item">
                    <IonButton routerLink="/home" expand="block">
                        Home
                    </IonButton>
                </div>

                <IonButton routerLink="/about" expand="block">
                    About
                </IonButton>

                <div className="nav-item">
                    <IonButton routerLink="/products" expand="block">
                        Products
                    </IonButton>
                </div>
            </div>

        </IonToolbar>)

}



export default Navbar;