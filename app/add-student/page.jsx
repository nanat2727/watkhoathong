'use client';

import * as XLSX from 'xlsx';
import { useRef } from 'react';
import { useState } from 'react';
import { db } from '@/lib/firebase';
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from 'firebase/firestore';

export default function AddStudentPage() {
  const [name, setName] = useState('');
  const [citizenId, setCitizenId] = useState('');
  const [classroom, setClassroom] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!/^\d{13}$/.test(citizenId)) {
      return setError('กรุณากรอกเลขประจำตัว 13 หลักให้ถูกต้อง');
    }

    try {
      const q = query(
        collection(db, 'students'),
        where('citizenId', '==', citizenId)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        return setError('มีเลขประจำตัวนี้อยู่ในระบบแล้ว');
      }

      await addDoc(collection(db, 'students'), {
        name,
        citizenId,
        classroom,
        createdAt: new Date(),
      });

      setSuccess('บันทึกนักเรียนเรียบร้อยแล้ว!');
      setName('');
      setCitizenId('');
      setClassroom('');
    } catch (err) {
      setError('เกิดข้อผิดพลาด: ' + err.message);
    }
  };
  const handleImportExcel = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = async (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
  
      let addedCount = 0;
  
      for (const row of data) {
        const name = row['ชื่อ'];
        const citizenId = row['เลขประจำตัว'];
        const classroom = row['ห้อง'];
  
        if (!name || !/^\d{13}$/.test(citizenId) || !classroom) continue;
  
        const q = query(
          collection(db, 'students'),
          where('citizenId', '==', citizenId)
        );
        const existing = await getDocs(q);
        if (!existing.empty) continue;
  
        await addDoc(collection(db, 'students'), {
          name,
          citizenId,
          classroom,
          createdAt: new Date(),
        });
  
        addedCount++;
      }
  
      alert(`✅ เพิ่มนักเรียนสำเร็จ ${addedCount} รายการ`);
    };
  
    reader.readAsBinaryString(file);
  };
  
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/school-bg.png')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-blue-800 text-center">เพิ่มนักเรียน</h2>

        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        {success && <div className="text-green-600 text-sm text-center">{success}</div>}

        <div>
          <label className="block text-sm font-medium mb-1">ชื่อ - สกุล</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">เลขประจำตัวประชาชน</label>
          <input
            type="text"
            value={citizenId}
            onChange={(e) => setCitizenId(e.target.value)}
            maxLength={13}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">ห้องเรียน</label>
          <input
            type="text"
            value={classroom}
            onChange={(e) => setClassroom(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md"
        >
          บันทึกข้อมูล
        </button>
        <div className="mt-4 text-center">
  <label
    htmlFor="excelUpload"
    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-md cursor-pointer transition"
  >
    📥 นำเข้าจาก Excel
  </label>
  <input
    id="excelUpload"
    type="file"
    accept=".xlsx,.xls"
    onChange={handleImportExcel}
    className="hidden"
  />
</div>
<a
  href="/student-template.xlsx"
  download
  className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition"
>
  ⬇️ ดาวน์โหลด Template Excel
</a>

      </form>
    </div>
  );
}
