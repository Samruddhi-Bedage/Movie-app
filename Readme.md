[README.md](https://github.com/user-attachments/files/23694110/README.md)

# Movie Discovery App using React.js


Step 1: Create a New React Project: npm create vite@latest my-react-app

Choose:
Framework → React
Variant → JavaScript

Run : 
cd my-react-app ->
npm install ->
npm run dev


## Folder Structure & File Explanation :

1. node_modules/
What it is:
This folder contains all the installed npm dependencies (like React, Vite, etc.).

⚠️ Don’t edit this folder manually — it’s auto-managed by npm.

2. public/
Purpose:
Contains static files that Vite won’t process.

🗂 Example:
vite.svg → default icon example.
You can place things like:

Favicon
Images
Robots.txt

👉 These files are directly accessible (e.g. /vite.svg).

3. src/ (Source Code Folder)
All your React code lives here — components, CSS, images, logic, etc.
Purpose: Entry point of your React app.
It connects your React code to the real DOM.

ReactDOM.createRoot(...) → tells React where to render (div#root in index.html)
<App /> → main component rendered inside root div
index.css → global styles

b. App.jsx
Purpose: The main component of your app — like the home layout.
useState → React Hook to manage component state.
JSX syntax (<>...</>) → how React defines UI.
export default App → makes it usable in main.jsx.

c. App.css
Purpose: Component-level styling for App.jsx.

d. index.css
Purpose: Global CSS for your whole app (like body styles, fonts, etc.)

e. assets/
Purpose: Stores local images, icons, or static media.
Example:
react.svg — the React logo.


4. index.html
Purpose: The only HTML file in your project.
<div id="root"> → React app mounts here.
<script type="module"> → imports your React entry file (main.jsx).


5. package.json
Purpose: Manages project dependencies, scripts, and metadata.
"dependencies" → libraries used in your project.
"scripts" → commands you can run (like npm run dev).

6. vite.config.js
Purpose: Configuration file for Vite.
Enables React plugin (JSX transformation, fast refresh).



📌 Project Setup Guide — TMDB + Appwrite

Follow the steps below to configure & run the project successfully.

🚀 Prerequisites

Make sure the following are installed on your system:

Node.js (Recommended version: 18+)

NPM or Yarn

Git

# Step 1 — Get TMDB API Key

Go to https://www.themoviedb.org/

Login / Create a new account.

Navigate to
More → API → API Reference

Search for:
Search → Movie & Discover → Movie

Generate an API Access Token.

Copy the token.

Open project → .env file → Paste:

VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY

# Step 2 — Setup Appwrite Backend

Go to Appwrite Dashboard & login.

Create a new project
Give a name & select a region.

Copy the Project ID → Add to .env:

VITE_APPWRITE_PROJECT_ID=YOUR_PROJECT_ID


Add a Web platform

Platform → Web

Enter hostname: localhost (or your host)

Confirm & Add

Install Appwrite SDK in your React project:

npm install appwrite

# Step 3 — Set up Database in Appwrite
Create a New Database

Under DB section → Create Database

Copy Database ID → Add to .env:

VITE_APPWRITE_DB_ID=YOUR_DB_ID

Create a New Collection

Create a new collection

Copy Collection ID → Add to .env:

VITE_APPWRITE_COLLECTION_ID=YOUR_COLLECTION_ID

# Step 4 — Add Required Attributes

Inside the collection → Add the following attributes:

1. Type	
2. Attribute Name	 
3. Size / Default	   
4. Required

String => searchTerm => 1000 chars => ✔ Yes

Integer	=> count => Default = 1	=> ✔ Yes

URL	=> poster_url => — => ✔ Yes

Integer	=> movie_id	=> — =>	✔ Yes

Click Create after each attribute.

# Step 5 — Manage Permissions

Go to Settings → Permissions

Click + → Select Any

Enable all permissions:

Click Update

# Step 6 — Run the Project
npm install
npm run dev


Then open the browser →
👉 http://localhost:5173
 (or shown URL)

🌟 You’re Done!

The project is now fully configured and ready to use! 🎉
You can customise the server port, alias paths, and more.



