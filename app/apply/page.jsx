// 📁 src/app/apply/page.jsx
'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ApplicationFormPage() {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    citizenId: '',
    birthday: '',
    blood: '',
    address: '',
    phone: '',
  });
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'applications'), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setSuccess('✅ ส่งใบสมัครเรียบร้อยแล้ว');
      setForm({ name: '', lastname: '', citizenId: '', birthday: '', blood: '', address: '', phone: '' });
    } catch (err) {
      alert('เกิดข้อผิดพลาด: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
        style={{ backgroundImage: "url('/school-bg.png')" }}>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl space-y-4">
        <h2 className="text-2xl font-bold text-blue-700 text-center">แบบฟอร์มใบสมัครเรียน</h2>
        {success && <p className="text-green-600 text-center">{success}</p>}

        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="ชื่อ" value={form.name} onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input type="text" name="lastname" placeholder="นามสกุล" value={form.lastname} onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input type="text" name="citizenId" placeholder="เลขประจำตัวประชาชน" value={form.citizenId} onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input type="date" name="birthday" placeholder="วันเกิด" value={form.birthday} onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input type="text" name="blood" placeholder="หมู่เลือด" value={form.blood} onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input type="text" name="phone" placeholder="เบอร์โทรศัพท์" value={form.phone} onChange={handleChange} required className="border px-3 py-2 rounded" />
        </div>

        <textarea
          name="address"
          placeholder="ที่อยู่"
          value={form.address}
          onChange={handleChange}
          rows={3}
          required
          className="w-full border px-3 py-2 rounded"
        ></textarea>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
          ส่งใบสมัคร
        </button>
      </form>
    </div>
  );
}
