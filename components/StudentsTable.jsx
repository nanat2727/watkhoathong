'use client';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../lib/firebase';

const StudentsTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const data = await fetchData();
      setStudents(data);
    };
    getStudents();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">รายชื่อนักเรียน</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Student ID</th>
            <th className="border px-4 py-2">ชื่อ</th>
            <th className="border px-4 py-2">เกรด</th>
            <th className="border px-4 py-2">วันที่สร้าง</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4">ไม่มีข้อมูล</td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{student.studentId}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.grade}</td>
                <td className="border px-4 py-2">{student.createdAt?.toDate().toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
