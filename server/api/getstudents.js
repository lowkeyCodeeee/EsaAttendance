import { connectDB } from "../lib/db.js";
import { getAllStudents } from "../lib/middleware.js";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const db = await connectDB();
        const students = await getAllStudents(db);
        res.status(200).json({ studentList: students });
    } catch (err) {
        console.error("Error fetching students:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
