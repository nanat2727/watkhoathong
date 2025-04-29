'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function RegisterPage() {
  const [citizenId, setCitizenId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!citizenId || !password) {
      setError('กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    try {
      // สร้างอีเมลจาก citizenId
      const email = `${citizenId}@school.com`;

      // เช็คว่าอีเมลนี้ถูกใช้งานแล้วหรือยัง
      const userRef = doc(db, 'users', email);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        setError('อีเมลนี้ถูกใช้งานแล้ว');
        return;
      }

      // สร้างผู้ใช้ใหม่
      const result = await createUserWithEmailAndPassword(auth, email, password);

      // เพิ่มข้อมูลผู้ใช้ใน Firestore
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        citizenId,
        role,
        createdAt: new Date(),
      });

      // เปลี่ยนเส้นทางไปยังหน้า Dashboard ของผู้ใช้
      if (role === 'student') router.push('/student-dashboard');
      else if (role === 'teacher') router.push('/teacher-dashboard');
      else router.push('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6" style={{ backgroundImage: "url('/school-bg.png')" }}>
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-blue-700 text-center">สมัครสมาชิก</h2>
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <input
          type="text"
          placeholder="เลขประจำตัวประชาชน"
          value={citizenId}
          onChange={(e) => setCitizenId(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="student">นักเรียน</option>
          <option value="teacher">ครู</option>
          <option value="admin">ผู้ดูแลระบบ</option>
        </select>

        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded">
          สมัครสมาชิก
        </button>
      </form>
    </div>
  );
}
