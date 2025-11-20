import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import {fileURLToPath} from "url";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/config', (req, res) => {
  // Return basic config for client to render social links, youtube id, etc.
  res.json({
    appName: process.env.APP_NAME || "AI Chat — Pro",
    youtubeVideoId: process.env.YOUTUBE_VIDEO_ID || "",
    social: {
      twitter: process.env.SOCIAL_TWITTER || "",
      instagram: process.env.SOCIAL_INSTAGRAM || "",
      facebook: process.env.SOCIAL_FACEBOOK || "",
      youtubeChannel: process.env.SOCIAL_YOUTUBE || ""
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server RUNNING on port ${PORT}`));
