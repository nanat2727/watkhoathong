// src/app/login/page.jsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [citizenId, setCitizenId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // ตรวจสอบความยาวของเลขบัตรประชาชน
    if (!/^\d{13}$/.test(citizenId)) {
      return setError('กรุณากรอกเลขประจำตัว 13 หลักให้ถูกต้อง');
    }

    // ส่งข้อมูลไปยัง Firebase หรือระบบ Auth จริง
    // (ตัวอย่างนี้เป็น mock)
    if (citizenId === '1234567890123' && password === 'password123') {
      router.push('/dashboard');
    } else {
      setError('เลขประจำตัวหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/school-bg.png')",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-blue-800">เข้าสู่ระบบ</h1>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded text-sm text-center">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            เลขประจำตัวประชาชน (13 หลัก)
          </label>
          <input
            type="text"
            value={citizenId}
            onChange={(e) => setCitizenId(e.target.value)}
            maxLength={13}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            รหัสผ่าน
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}
