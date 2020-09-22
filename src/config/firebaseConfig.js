import firebase from "firebase";
export const config = {
  apiKey: "AIzaSyAbLzjyzLqol3ZmoFqIMTOTs0AiJ4Cuy1U",
  authDomain: "theturtlewhofucks.firebaseapp.com",
  databaseURL: "https://theturtlewhofucks.firebaseio.com",
  projectId: "theturtlewhofucks",
  storageBucket: "theturtlewhofucks.appspot.com",
  messagingSenderId: "946216130059",
  appId: "1:946216130059:web:b2d07bb5591f6c7de1990e",
  measurementId: "G-2GE1T98T6D",
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
