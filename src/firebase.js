// import firebase from 'firebase';

// const firebaseApp = firebase.initializeApp({
//    apiKey: "AIzaSyBj4znQJc_v_04Sp6xtoPXCaRHGmy318hc",
//     authDomain: "olx-clone-0.firebaseapp.com",
//     databaseURL: "https://olx-clone-0.firebaseio.com",
//     projectId: "olx-clone-0",
//     storageBucket: "olx-clone-0.appspot.com",
//     messagingSenderId: "148363868160",
//     appId: "1:148363868160:web:07c8d2068cb98e9f2980e5",
//     measurementId: "G-9M2N6H7J4R"
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;









import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBj4znQJc_v_04Sp6xtoPXCaRHGmy318hc",
    authDomain: "olx-clone-0.firebaseapp.com",
    databaseURL: "https://olx-clone-0.firebaseio.com",
    projectId: "olx-clone-0",
    storageBucket: "olx-clone-0.appspot.com",
    messagingSenderId: "148363868160",
    appId: "1:148363868160:web:07c8d2068cb98e9f2980e5",
    measurementId: "G-9M2N6H7J4R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;






