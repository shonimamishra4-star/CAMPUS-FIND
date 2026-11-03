# 🎓 CampusFind - College Lost & Found Portal

A modern, responsive, and feature-packed Lost & Found web portal designed specifically for college students, university campus security desks, and faculty members.

![CampusFind Portal](https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80)

---

## ✨ Features at a Glance

### 1. 🔐 Student & Campus Authentication
- **Top Bar Log In / Profile**: Dedicated "Log In" button in the top navigation bar. When logged in, displays your verified name, roll number, avatar pill, and a quick logout button.
- **Protected Reporting Flow**: Clicking **"+ Lost Something"** or **"+ Found Something"** automatically prompts unauthenticated users to log in first.
- **Auto-Prefill & Verified Contact Details**: Once authenticated, the student's name, roll number, college email, and phone number are automatically pre-filled and linked to the report.
- **Multiple Auth Options**:
  - **Sign In**: Login with college email or student roll number.
  - **Register**: Register a new student profile with department, roll number, and phone number.
  - **⚡ 1-Click Demo Profiles**: Instantly switch between test profiles:
    - *Rahul Sharma (CSE Dept | Roll: 2105128)*
    - *Priya Sundaram (ECE Dept | Roll: 210549)*
    - *Officer Singh (Campus Security Desk)*
- **Persistent Sessions**: Login state is saved in `localStorage`, so your authenticated session remains active across page reloads.

### 2. 🔍 Comprehensive Browse & Instant Filter
- **Live Search**: Instant keyword search matching titles, descriptions, specific rooms, and distinguishing marks.
- **Category Filter**: Electronics, ID Cards & Wallets, Keys, Books & Stationery, Bags & Backpacks, Watches & Glasses, Water Bottles, and more.
- **Status Pills**: Filter by **All Items**, **Lost**, or **Found**.
- **Building / Zone Filter**: Filter by specific campus locations (Central Library, Tech Block, Science Labs, Cafeteria, Sports Complex, Hostels, etc.).
- **Sorting**: Sort by newest, oldest, or items offering finder's rewards.

### 3. 🤖 Automated Smart-Match Engine
- Automatically checks reciprocal criteria whenever lost or found reports are submitted.
- Matches items using title keywords, campus location proximity, and category similarity.
- Alerts both the finder and owner with a match score banner (e.g. *92% match detected!*).

### 4. 🗺️ Interactive Campus Map & Heatmap
- Visual campus map highlighting 9 major campus zones.
- Interactive clickable zones that display real-time counts of missing/found items.
- 1-click filtering by clicking directly on campus buildings on the map.

### 5. 📄 Physical Notice Poster & Flyer Generator
- Automatically compiles item details into a printable university noticeboard flyer.
- Includes **tear-off contact slips** for physical cork noticeboards at hostel gates and cafeterias.
- 1-click **Print / Save as PDF** formatted cleanly for A4 bulletin boards.

### 6. 🛡️ Campus Security & Student Claims Hub
- Ownership verification questionnaire (claimants describe private details like lock-screen wallpaper, serial numbers, hidden stickers).
- Requires student authentication before filing a claim.
- Campus security officer review queue to approve and log physical handovers safely.

### 7. 🌓 Dark Mode & Mobile Friendly
- High-contrast sleek dark mode and clean modern light mode with instant theme toggle.
- 100% responsive for smartphones, tablets, and desktop displays.

---

## 🚀 How to Run the Website

### Method 1: Direct Browser Launch (Easiest)
Simply double-click [`start.bat`](start.bat) or double-click [`index.html`](index.html) in your file manager.

### Method 2: Live Server in VS Code
1. Open the project folder in VS Code (`code .`).
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 📁 Project Structure

```text
lost and found portal/
├── index.html       # Semantic HTML5 layout, auth modal, report modals, SVG campus map
├── styles.css       # Responsive design, CSS variables, dark/light theme, auth pills, print styles
├── app.js           # Auth manager, smart matchmaking, state management, search, and claims logic
├── start.bat        # 1-click Windows launcher
└── README.md        # Documentation and feature guide
```
