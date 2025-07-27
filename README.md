# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

## COMPANY:CODTECH IT SOLUTIONS

## NAME:SHIAK.NAWAZIYA

## INTERN ID:CT06DG2648

## DOMAIN:FULL STACK WEB DEVELOPMENT

## DURATION:6 WEEKS

## MENTOR:NEELA SANTOSH

## 📊 Productivity Tracker Chrome Extension — Project Overview

The **Productivity Tracker** is a custom-built Chrome Extension designed to monitor and analyze a user's time spent on different websites in real time. This tool helps users become more mindful of their browsing habits by recording visit durations across tabs and domains. The collected data is displayed in a lightweight popup summary showing the exact time spent on each active tab session.

Developed as part of a full-stack internship task (Task 4), this extension represents a powerful combination of front-end development, Chrome APIs, JavaScript logic, and user experience optimization. It functions completely within the browser and is activated whenever the user opens or switches tabs, logging the active domain and the duration spent on each. The core objective of the project was to create a browser-based time tracker that provides quick insights into productivity — helping users differentiate between productive (e.g., coding or study platforms) and unproductive (e.g., social media, video streaming) browsing.

The Productivity Tracker is not only useful as a personal time management assistant but also serves as a showcase of Chrome Extension development skills including service workers, background scripts, local storage usage, and UI design.



## 🛠 Tools & Technologies Used

- **JavaScript (ES6)**: Core logic for time tracking, event handling, and popup rendering.
- **Chrome Extension APIs**: Used for capturing tab activity, handling events like focus/blur, and managing extension lifecycle via background scripts and service workers.
- **HTML5**: Used to structure the popup UI.
- **CSS3**: For styling the popup window and ensuring a clean and modern interface.
- **Chrome Developer Tools**: For debugging service workers, inspecting tab behaviors, and testing the extension locally.
- **JSON Manifest (v3)**: The configuration file used to define the extension's behavior, permissions, and background services.
- **LocalStorage / Chrome Storage API**: Temporarily stores visit data locally in the browser session for analytics display.



## 💻 Platform & Compatibility

This extension runs in:
- **Google Chrome (latest version)**
- Compatible with **Chromium-based browsers** (like Brave, Edge)
- Works on Windows, Linux, and macOS
- Fully tested in Developer Mode via `chrome://extensions`


## Output

![output](https://github.com/user-attachments/assets/9baf0114-e83d-4d92-b729-efd876b4f63d)



## 📈 Applicability

The Productivity Tracker Chrome Extension is ideal for:
- **Students** who want to monitor time spent on educational platforms versus distractions.
- **Remote workers** who need to understand and improve their browser habits.
- **Personal use** for productivity tracking and digital minimalism.
- **Developers & freelancers** looking to log and limit time on non-work-related websites.
- **Browser-based time tracking tools** in lightweight environments without needing separate desktop apps.

It is especially relevant for those who spend long hours online and want quick, visual feedback on how their time is distributed across websites like YouTube, Google Docs, GitHub, and others.



## 🎯 Key Features

- Real-time time tracking by domain (e.g., `youtube.com`, `spotify.com`)
- Minimal popup UI with clear time summaries
- Lightweight and fast — no third-party dependencies
- Auto-starts on browser launch
- Runs silently in the background without disrupting the user
- Option to manually refresh or update usage data



## ⚙️ Installation & Setup (For Developer Mode)

1. Open Google Chrome and navigate to `chrome://extensions`
2. Enable **Developer Mode** (top right)
3. Click **Load Unpacked**
4. Select the folder containing:
   - `manifest.json`
   - `background.js`
   - `popup.html`, `popup.js`, `style.css`

Once installed, the extension will begin tracking time on each tab you focus on, displaying a summary when you click the extension icon.



## 📚 Learning Outcomes

From building this project, I learned how to:
- Work with Chrome’s background scripts and events (`onActivated`, `onUpdated`, `onRemoved`)
- Utilize `chrome.tabs` and `chrome.storage` APIs
- Handle tab switches, window focus, and idle state detection
- Build lightweight UIs using HTML/CSS inside the extension popup
- Debug using Chrome’s Extension Developer Tools



## 📄 Conclusion

The **Productivity Tracker Chrome Extension** is a clean, efficient solution to track how users spend their time on different websites. It demonstrates an understanding of Chrome’s extension architecture, browser events, and UI logic — all tied together in a simple, yet powerful tool. As a Task 4 internship deliverable, it fulfills the requirement to build a Chrome extension with real-time time tracking and analytics. With further enhancements, it could include chart visualizations, productivity scoring, or integrations with cloud services for long-term tracking.

