import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req: Request) {
  const { name, phone, email, service } = await req.json();

  if (!name || !phone) {
    return NextResponse.json(
      { message: "Thiếu thông tin" },
      { status: 400 }
    );
  }

  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    await db.execute(
      `INSERT INTO contacts (name, phone, email, service) VALUES (?, ?, ?, ?)`,
      [name, phone, email, service]
    );

    return NextResponse.json({ message: "Lưu thành công" });
  } catch (err) {
    return NextResponse.json(
      { message: "Lỗi server" },
      { status: 500 }
    );
  }
}