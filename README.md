# 📻 QRZ Logbook CSV Downloader (Tampermonkey Script)

A robust **User Script** designed to export your QSO data from **QRZ.com Logbook** into a **CSV file** instantly, without requiring a paid XML Data subscription.

This script adds a persistent, floating **"📥 CSV DOWNLOAD"** button to the bottom-right corner of your logbook page. It works by scraping the data currently visible in your browser's table view.

## 🚀 Features

* **Free Export:** Download your logbook data as a CSV file without a paid subscription.
* **Floating Button:** The download button is fixed to the **bottom-right corner** of the screen. It stays visible even when scrolling or if the page layout changes.
* **Smart Parsing:** Automatically handles data fields, ensuring a clean CSV format compatible with Excel, LibreOffice, and other logbook software.
* **Cross-Platform:** Tested on Chrome, Edge, Firefox, Safari, and Kiwi Browser (Android).

---

## 📦 Installation

### Step 1: Install a Userscript Manager

First, you need a browser extension to run this script. If you already have one, skip to Step 2.

* **Chrome / Edge / Brave:** [Install Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* **Firefox:** [Install Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
* **Safari (macOS):** [Install Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887)
* **Android:** Use **Kiwi Browser** and install the Chrome version of Tampermonkey.

### Step 2: Install the Script

*Choose one of the methods below:*

#### 🟢 Method A: Automatic (Recommended)

1. Click the link below to go to the script file on GitHub:
👉 **[GO TO SCRIPT PAGE](https://github.com/Erdener/QRZ-Logbook-Downloader/blob/main/QRZ%20Logbook%20CSV%20Downloader.js)** 👈
2. On the GitHub page, look for the **"Raw"** button (top-right of the code box).
3. Click the **Raw** button.
4. Tampermonkey should intercept the file and open an installation tab. Click **"Install"**.

#### 🟠 Method B: Manual (If Method A doesn't work)

*Some browsers (especially Firefox) may display the code as text instead of installing it automatically. If that happens:*

1. Go to the **[Script Page](https://github.com/Erdener/QRZ-Logbook-Downloader/blob/main/QRZ%20Logbook%20CSV%20Downloader.js)** and click **Raw**.
2. Select all the code (`Ctrl+A` or `Cmd+A`) and **Copy** it.
3. Click the **Tampermonkey icon** in your browser toolbar and select **"Create a new script..."**.
4. **Delete** any default code already in the editor.
5. **Paste** the code you copied from GitHub.
6. Click **File** -> **Save** (or press `Ctrl+S`).

---

## 📖 How to Use

1. Go to your logbook on [QRZ.com](https://logbook.qrz.com).
2. **Important:** The script downloads **only what is visible** on the screen.
* Scroll down to the "Display Options" (or Settings) section on the QRZ page.
* Change **"Rows per Page"** to the maximum available number (e.g., 100 or 200) to grab as many records as possible in one go.


3. Look at the **bottom-right corner** of your screen. You will see a floating red button labeled:
**`📥 CSV DOWNLOAD`**
4. Click the button. Your logbook will instantly download as a `.csv` file named `QRZ_Logbook_[DATE].csv`.

### 💡 Pro Tip: Large Logbooks

If you have thousands of QSOs, you cannot display them all on a single page.

1. Set rows per page to maximum.
2. Go to **Page 1** -> Click Download.
3. Go to **Page 2** -> Click Download.
4. Combine the CSV files in Excel or your preferred software.

---

## ❓ Troubleshooting

**The button is not appearing?**

* Refresh the page (`F5` or `Ctrl+R`).
* Ensure Tampermonkey is **Enabled** in your browser extensions.
* The script uses a smart polling mechanism, so the button should appear within 1-2 seconds after the page loads.

**The CSV file is empty?**

* Wait for the QRZ logbook table (the actual list of QSOs) to fully load before clicking the button.

---

## ⚠️ Disclaimer

* This script is a third-party tool and is **not** affiliated with, endorsed by, or connected to QRZ.com, Tampermonkey etc.
* This tool runs entirely in your browser (client-side). No data is sent to any external server.
* Use this tool responsibly. Do not use automated bots to scrape the site rapidly, as this may violate QRZ Terms of Service.

---

### 👨‍💻 Contributing

Feel free to open an issue or submit a pull request if you find any bugs or have suggestions for improvements.
