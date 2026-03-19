const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MySQL
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Jiyeon12345!", 
  database: "contact_db",
});

// API nhận dữ liệu từ frontend
app.post("/api/contact", (req, res) => {
  const { name, phone, email, address } = req.body;

  // check dữ liệu
  if (!name || !phone) {
    return res.status(400).json({ message: "Thiếu thông tin" });
  }

  const sql = `
    INSERT INTO contacts (name, phone, email, address)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, phone, email, address], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Lỗi server" });
    }

    res.json({ message: "Lưu thành công" });
  });
});

// chạy server
app.listen(5000, () => {
  console.log("Server chạy: http://localhost:5000");
});