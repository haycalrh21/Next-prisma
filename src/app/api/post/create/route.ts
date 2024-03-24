import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request){
  try {
    const body = await req.json();
    const post = await db.post.create({data: {
      name : body.name,
    }});

    return NextResponse.json(post,{status:200})
  } catch (error) {
    return NextResponse.json({message: 'data ga ada'},{status:500})
    
  }
}