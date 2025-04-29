// src/app/api/from-sheet/route.js
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  const data = await req.json();
  await addDoc(collection(db, "students"), data);

  return Response.json({ status: "ok", received: data });
}
