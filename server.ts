import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Set payload limit high to support large Base64 profile pictures
  app.use(express.json({ limit: "15mb" }));
  app.use(express.urlencoded({ limit: "15mb", extended: true }));

  // API endpoint to save the uploaded custom profile picture 
  app.post("/api/save-profile-img", (req, res) => {
    try {
      const { image } = req.body;
      if (!image || typeof image !== "string") {
        return res.status(400).json({ error: "No image data provided" });
      }

      // Securely write the image data as a module export
      const targetPath = path.join(process.cwd(), "src", "components", "profile-b64.ts");
      const fileContent = `export const PROFILE_BASE64 = ${JSON.stringify(image)};\n`;
      
      fs.writeFileSync(targetPath, fileContent, "utf-8");
      console.log("Successfully locked custom profile picture in profile-b64.ts");
      return res.json({ success: true, message: "Profile picture permanently locked for all visitors!" });
    } catch (error: any) {
      console.error("Failed to save profile picture:", error);
      return res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  // API endpoint to save the uploaded custom hero showreel video
  app.post("/api/save-hero-video", (req, res) => {
    try {
      const { videoBase64 } = req.body;
      if (!videoBase64 || typeof videoBase64 !== "string") {
        return res.status(400).json({ error: "No video data provided" });
      }

      // Base64 format: "data:video/mp4;base64,AAAA..." or raw Base64 contents
      const base64Data = videoBase64.replace(/^data:video\/[^;]+;base64,/, "");
      
      const targetDir = path.join(process.cwd(), "assets");
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      const targetPath = path.join(targetDir, "hero-video.mp4");
      fs.writeFileSync(targetPath, base64Data, "base64");
      console.log("Successfully saved custom video to /assets/hero-video.mp4");
      return res.json({ success: true, message: "Video permanently saved on backend server!" });
    } catch (error: any) {
      console.error("Failed to save hero video:", error);
      return res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  // Serve assets/ folder statically so saved profile images or videos are instantly queryable
  app.use("/assets", express.static(path.join(process.cwd(), "assets")));

  // Check if server is running full stack
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite development or production asset serving middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
