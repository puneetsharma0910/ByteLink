import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function ShortUrlPage({ params }) {
  const { shorturl } = params;

  const client = await clientPromise;
  const db = client.db("bytelinks");
  const collection = db.collection("urls");

  const doc = await collection.findOne({ shorturl });

  if (doc) {
    redirect(doc.url); 
  }

  redirect(process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"); 
  return null; 
}


