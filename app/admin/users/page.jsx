"use client"

import { useEffect, useState } from "react"
import { db } from "@/lib/firebase"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import dayjs from "dayjs"

export default function UsersPage() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"))
    const usersData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setUsers(usersData)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const changeRole = async (userId, newRole) => {
    const userRef = doc(db, "users", userId)
    await updateDoc(userRef, { role: newRole })
    fetchUsers()
  }

  const deleteUser = async (userId) => {
    const userRef = doc(db, "users", userId)
    await deleteDoc(userRef)
    fetchUsers()
  }

  const mockUsers = [
    {
      uid: "uid001",
      name: "ณัฏฐ์ นนทะเสน",
      email: "nanat2727@hotmail.com",
      phone: "0626155562",
      role: "admin",
    },
    {
      uid: "uid002",
      name: "พรทิพย์ หลีวิจิตร",
      email: "ornthai@example.com",
      phone: "0897654321",
      role: "teacher",
    },
    {
      uid: "uid003",
      name: "กัญญาภัทร รฐาสุวรรณ",
      email: "weeraphon@example.com",
      phone: "0823456789",
      role: "student",
    },
  ]

  const addMockUsers = async () => {
    const usersCol = collection(db, "users")
    for (const user of mockUsers) {
      await addDoc(usersCol, {
        ...user,
        createdAt: serverTimestamp(),
      })
    }
    fetchUsers()
    alert("✅ เพิ่ม Mock Users สำเร็จแล้ว!")
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">รายชื่อสมาชิก</h1>

      <div className="mb-6">
        <Button onClick={addMockUsers} className="bg-blue-600 text-white">
          ➕ เพิ่ม Mock Users
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id} className="p-4 bg-white shadow-md rounded-2xl">
            <h2 className="text-lg font-semibold text-blue-900">{user.name}</h2>
            <p className="text-sm text-gray-700">สิทธิ์: {user.role}</p>
            <p className="text-sm text-gray-700">อีเมล: {user.email}</p>
            <p className="text-sm text-gray-700">โทร: {user.phone}</p>
            <p className="text-sm text-gray-500">
              สมัครเมื่อ:{" "}
              {user.createdAt?.toDate
                ? dayjs(user.createdAt.toDate()).format("DD/MM/YYYY")
                : "N/A"}
            </p>
            <div className="mt-3 flex gap-2">
              <Button
                onClick={() => changeRole(user.id, user.role === "admin" ? "student" : "admin")}
                className="bg-yellow-500 text-white"
              >
                เปลี่ยนสิทธิ์
              </Button>
              <Button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 text-white"
              >
                ลบผู้ใช้
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
