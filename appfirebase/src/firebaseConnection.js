import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDa65_AORrN1kfL3JCOakHfDNFvRydeWR4",
    authDomain: "projeto-udemy-1-66d18.firebaseapp.com",
    projectId: "projeto-udemy-1-66d18",
    storageBucket: "projeto-udemy-1-66d18.appspot.com",
    messagingSenderId: "535247851793",
    appId: "1:535247851793:web:fb9f1baa04103a2dd93cb0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestire(app);

export{ db };