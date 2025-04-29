"use client"

import { useEffect } from "react"
import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const mockUsers = [
  {
    uid: "uid001",
    name: "สมชาย ใจดี",
    email: "somchai@example.com",
    phone: "0812345678",
    role: "admin",
  },
  {
    uid: "uid002",
    name: "อรทัย พันธุ์แท้",
    email: "ornthai@example.com",
    phone: "0897654321",
    role: "teacher",
  },
  {
    uid: "uid003",
    name: "วีระพล ศรีสุข",
    email: "weeraphon@example.com",
    phone: "0823456789",
    role: "student",
  },
]

export default function MockAddUsersPage() {
  useEffect(() => {
    const addMockUsers = async () => {
      const usersCol = collection(db, "users")
      for (const user of mockUsers) {
        await addDoc(usersCol, {
          ...user,
          createdAt: serverTimestamp(),
        })
      }
      alert("✅ เพิ่ม Mock Users สำเร็จแล้ว!")
    }

    addMockUsers()
  }, [])

  return (
    <div className="p-10 text-center text-blue-800 text-xl">
      กำลังเพิ่ม Mock Users...
    </div>
  )
}
