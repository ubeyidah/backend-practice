import express from "express"
import {configDotenv} from "dotenv"
import userRoutes from "./routes/user.rotue.js"
import cors from "cors"
import path from "path";
import { fileURLToPath } from "url";




configDotenv()
const app = express();
app.use(cors())
app.use("/api/users", userRoutes)

// Required for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oneStepBack = path.join(__dirname, ".."); // root folder

if ( process.env.STATUS !== "dev") {
    app.use(express.static(path.join(oneStepBack,"client", 'dist')));
    app.get('/', function (req, res) {
    res.sendFile(path.join(oneStepBack,"client", 'dist' ,'index.html'));
    });
}
const port = process.env.PORT 
app.listen(port, () => {
    console.log(`server run http://localhost:${port}`);
})
