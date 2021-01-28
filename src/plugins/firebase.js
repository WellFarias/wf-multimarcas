import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAjW6KT-ZZgp4NeklO_lFzegUlCIrrnpSU",
    authDomain: "wf-multimarcas-9b585.firebaseapp.com",
    databaseURL: "https://wf-multimarcas-9b585-default-rtdb.firebaseio.com",
    projectId: "wf-multimarcas-9b585",
    storageBucket: "wf-multimarcas-9b585.appspot.com",
    messagingSenderId: "937749169981",
    appId: "1:937749169981:web:cabb47fbbff430c5192754",
    measurementId: "G-YRN78B7WM4"
};

firebase.initializeApp(config)
firebase.analytics()


export default firebase
