import { connectDB } from "../db/database";
import { app } from "../app";

app.listen(3000)
connectDB()

console.log('Server running at 3000')