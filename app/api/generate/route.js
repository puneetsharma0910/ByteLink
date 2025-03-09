import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bytelinks");
    const collection = db.collection("urls");

    console.log("Received Data:", body); // ✅ Debugging

    // Check if short URL already exists
    const existingUrl = await collection.findOne({ shorturl: body.shorturl });
    if (existingUrl) {
      return NextResponse.json({ success: false, message: "Short URL already exists" });
    }

    // Insert new URL
    await collection.insertOne({ url: body.url, shorturl: body.shorturl });

    console.log("Inserted Data:", body.shorturl); // ✅ Debugging

    return NextResponse.json({ success: true, message: "URL generated successfully", shorturl: body.shorturl });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" });
  }
}
