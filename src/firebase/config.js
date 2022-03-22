import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



 const firebaseConfig = {
  apiKey: "AIzaSyDkus4xY2TtF0JohxGcPyMJhS5J3cDwdY4",
  authDomain: "pic-gallery-d6831.firebaseapp.com",
  projectId: "pic-gallery-d6831",
  storageBucket: "pic-gallery-d6831.appspot.com",
  messagingSenderId: "1034131519805",
  appId: "1:1034131519805:web:251dd161b99e8dcf87ad54"
};

const app = initializeApp(firebaseConfig);
const projectfirestore = getFirestore(app)
const projectstorage = getStorage(app);





export{ projectstorage, projectfirestore };