import app from "@app";
import config from '@config';
import  connectDB from '@db/database';


app.listen(config.app.port)
connectDB()
console.log(`Server running at ${config.app.port}`)