# 🌐 How to Publish CampusFind Online & Get a 24/7 Shareable Link

This website is completely self-contained (HTML, CSS, JS) and requires **no backend server, no database configuration, and no Node.js installation**. You can host it online 100% free with a permanent HTTPS link using any of the methods below.

---

## ⚡ Method 1: Netlify Drop (Fastest — 15 Seconds, No Code or Git Needed)

1. Open your browser and go to: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Drag and drop the folder **`lost and found portal`** from your Desktop directly into the dashed box on the Netlify webpage.
3. Within 10 seconds, Netlify will generate a live public URL, for example:
   ```text
   https://campusfind-portal.netlify.app
   ```
4. *(Optional)* Click **Site configuration** → **Change site name** to pick your own custom campus URL (e.g., `https://kiit-lost-and-found.netlify.app`).

---

## 🚀 Method 2: GitHub Pages (Permanent & Free)

1. Create a free account at **[GitHub.com](https://github.com)**.
2. Click **New Repository** and name it `lost-and-found-portal`.
3. In VS Code or command prompt, upload your files:
   ```powershell
   git init
   git add .
   git commit -m "Initial release of CampusFind portal"
   git branch -M main
   git remote add origin https://github.com/<your-username>/lost-and-found-portal.git
   git push -u origin main
   ```
4. In your GitHub repository, go to **Settings** → **Pages** (on the left sidebar).
5. Under **Branch**, select `main` and `/ (root)` and click **Save**.
6. Your live shareable link will be active at:
   ```text
   https://<your-username>.github.io/lost-and-found-portal/
   ```

---

## ☁️ Method 3: Vercel

1. Go to **[https://vercel.com](https://vercel.com)**.
2. Click **Add New Project** → Import your GitHub repository or drag the folder.
3. Click **Deploy**.
4. You receive an instant production link: `https://lost-and-found-portal.vercel.app`.

---

## 🔗 Built-in Sharing & Deep-Linking Features

Once deployed, the portal has full native sharing built-in:
- **Share Website Button**: Click **"Share"** in the top navigation bar to copy the site URL, view the mobile QR code, or share directly to WhatsApp and Telegram.
- **Direct Item Links**: Every item has a share button. Clicking it generates a link like:
  ```text
  https://your-site.netlify.app/?item=item-102
  ```
  When someone opens that link, the portal automatically scrolls to that item and opens its detail inspection modal!
- **QR Code Scanning**: The share modal generates a real-time QR code that college students can scan with their phone cameras to open the portal on mobile.
