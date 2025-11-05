
Step 1: Create a New React Project: npm create vite@latest my-react-app

Choose:
Framework → React
Variant → JavaScript

Run : 
cd my-react-app
npm install
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
You can customize the server port, alias paths, and more.


7. .gitignore
Purpose: Lists files/folders Git should ignore.
