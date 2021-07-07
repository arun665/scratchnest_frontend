import { IonRow, IonText,IonCol } from "@ionic/react";
import firebase from "firebase";
import React from "react";

const modalStyle: any = {
  position: "fixed",
  zIndex: "999",
 
  background: "white",
  top:"6rem",
  transform: "scale(1.5)",
  lineHeight: "3rem"
};
function PersonModal(props: any) {

  const forgotPassword = (Email: string) => {
    firebase.auth().sendPasswordResetEmail(Email)
        .then(function () {
            alert('Please check your email...')
        }).catch(function (e) {
            console.log(e)
        }) 
    }

  return (
    <IonRow style={modalStyle} className="prsnModal">
      {props.hover ? (
        <IonCol className="showTime">
          {" "}
          <div className="Name">
          Hi {props.displayName} <br />
          </div>
          <IonText className="tocursor" onClick={() => props.Signin()}>
            {props.user ? "Logout" : "Login"}
          </IonText>{" "}
        </IonCol>
      ) : (
        ""
      )}
    </IonRow>

  );
}

export default PersonModal;
