"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function DashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "students"), (snapshot) => {
      const students = snapshot.docs.map(doc => doc.data());
      setData(students);
    });

    return () => unsub();
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">📋 ตารางนักเรียน</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ชื่อ</th>
            <th className="border p-2">รหัสนักเรียน</th>
            <th className="border p-2">เกรด</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td className="border p-2">{d.name}</td>
              <td className="border p-2">{d.studentId}</td>
              <td className="border p-2">{d.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-bold">📊 กราฟแสดงเกรด</h2>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="grade" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
