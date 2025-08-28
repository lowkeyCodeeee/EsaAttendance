import { connectDB } from "../lib/db.js";
import { postData, getStudent } from "../lib/middleware.js";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const db = await connectDB();
        const info = await postData(db, req.query);
        const updatedStudent = await getStudent(db, info);

        res.status(200).json({
            message: "Uploading success",
            data: updatedStudent,
        });
    } catch (err) {
        console.error("Post data error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
