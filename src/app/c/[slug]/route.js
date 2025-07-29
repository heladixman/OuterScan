import { NextResponse } from 'next/server';
import {db} from '@/lib/db'

export async function GET(req, { params }) {
  const { slug } = params;

  try {
    const [rows] = await db.execute('SELECT * FROM posts WHERE slug = ?', [slug]);

    if (rows.length === 0) {
      return NextResponse.json({ data: null,  message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(rows[0]);  // Return the first post (should be only one)
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Error fetching post' }, { status: 500 });
  }
}
