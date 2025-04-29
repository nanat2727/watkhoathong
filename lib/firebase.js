// lib/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, limit, addDoc, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// 🧩 config firebase
const firebaseConfig = {
  apiKey: "AIzaSyCE3rEpCdJhVoG6qauA40OKIWyV5OafBuU",
  authDomain: "watkhaothong.firebaseapp.com",
  projectId: "watkhaothong",
  storageBucket: "watkhaothong.appspot.com",
  messagingSenderId: "371702743097",
  appId: "1:371702743097:web:dfd314bdfac72f4f2fcde8",
  measurementId: "G-Z52G0ZQ02K"
};

// 🧠 initialize app (ป้องกันซ้ำใน Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 📦 export instances
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

// ✅ ฟังก์ชันเพิ่มนักเรียน
const addStudentData = async () => {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      studentId: "123456",
      name: "ณัฏฐ์ นนทะเสน",
      grade: "ป.6",
      createdAt: Timestamp.now()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// ✅ ฟังก์ชันดึงข้อมูลนักเรียน
const fetchData = async () => {
  const q = query(collection(db, 'students'), orderBy('createdAt', 'desc'), limit(5));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map(doc => doc.data());
  return data;
};

// ✅ export ทุกอย่าง
export { db, auth, analytics, storage, addStudentData, fetchData };
