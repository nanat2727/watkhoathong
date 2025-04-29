// 📁 src/app/admin/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

export default function AdminPage() {
  const [applications, setApplications] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchApplications = async () => {
      const snapshot = await getDocs(collection(db, 'applications'));
      setApplications(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchApplications();
  }, []);

  const handleEdit = (app) => {
    setEditingId(app.id);
    setFormData(app);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const ref = doc(db, 'applications', editingId);
    await updateDoc(ref, formData);
    setEditingId(null);
    window.location.reload();
  };

  const handleDelete = async (id) => {
    const ok = confirm('คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?');
    if (!ok) return;
    await deleteDoc(doc(db, 'applications', id));
    setApplications(applications.filter(app => app.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">แดชบอร์ดผู้ดูแลระบบ: ใบสมัครเรียน</h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="border px-2 py-1">ชื่อ</th>
              <th className="border px-2 py-1">นามสกุล</th>
              <th className="border px-2 py-1">ปชช.</th>
              <th className="border px-2 py-1">วันเกิด</th>
              <th className="border px-2 py-1">หมู่เลือด</th>
              <th className="border px-2 py-1">ที่อยู่</th>
              <th className="border px-2 py-1">เบอร์</th>
              <th className="border px-2 py-1">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app.id} className="bg-white even:bg-gray-100">
                {editingId === app.id ? (
                  <>
                    <td className="border px-2 py-1">
                      <input name="name" value={formData.name} onChange={handleChange} className="border px-1" />
                    </td>
                    <td className="border px-2 py-1">
                      <input name="lastname" value={formData.lastname} onChange={handleChange} className="border px-1" />
                    </td>
                    <td className="border px-2 py-1">
                      <input name="citizenId" value={formData.citizenId} onChange={handleChange} className="border px-1" />
                    </td>
                    <td className="border px-2 py-1">
                      <input name="birthday" value={formData.birthday} onChange={handleChange} className="border px-1" />
                    </td>
                    <td className="border px-2 py-1">
                      <input name="blood" value={formData.blood} onChange={handleChange} className="border px-1" />
                    </td>
                    <td className="border px-2 py-1">
                      <textarea name="address" value={formData.address} onChange={handleChange} className="border px-1" />
                    </td>
                    <td className="border px-2 py-1">
                      <input name="phone" value={formData.phone} onChange={handleChange} className="border px-1" />
                    </td>
                    <td className="border px-2 py-1">
                      <button onClick={handleSave} className="text-green-600 hover:underline">บันทึก</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border px-2 py-1">{app.name}</td>
                    <td className="border px-2 py-1">{app.lastname}</td>
                    <td className="border px-2 py-1">{app.citizenId}</td>
                    <td className="border px-2 py-1">{app.birthday}</td>
                    <td className="border px-2 py-1">{app.blood}</td>
                    <td className="border px-2 py-1">{app.address}</td>
                    <td className="border px-2 py-1">{app.phone}</td>
                    <td className="border px-2 py-1 space-x-2">
                      <button onClick={() => handleEdit(app)} className="text-blue-600 hover:underline">แก้ไข</button>
                      <button onClick={() => handleDelete(app.id)} className="text-red-600 hover:underline">ลบ</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}