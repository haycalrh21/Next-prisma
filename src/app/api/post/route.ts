import { db } from '@/app/lib/db';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const post = await db.post.findMany();
        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'data ga ada' }, { status: 500 });
    }
}