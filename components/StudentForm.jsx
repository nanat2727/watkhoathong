"use client"
import { useState } from "react";
import { saveToStorage, loadFromStorage } from "../utils/storage";

export default function StudentForm() {
  const [students, setStudents] = useState(loadFromStorage("students"));
  const [name, setName] = useState("");

  const addStudent = () => {
    const updated = [...students, { id: Date.now(), name }];
    setStudents(updated);
    saveToStorage("students", updated);
    setName("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">เพิ่มนักเรียน</h2>
      <input className="border p-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="ชื่อนักเรียน" />
      <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded" onClick={addStudent}>เพิ่ม</button>

      <ul className="mt-4">
        {students.map((s) => <li key={s.id}>• {s.name}</li>)}
      </ul>
    </div>
  );
}

