## Task Dashboard

A task management dashboard built with **React**, **Vite**, **Redux Toolkit**, **React Router**, **React Hook Form + Zod**, **Tailwind CSS 4**, and **Axios**. This project lets you view, create, and manage tasks in a modern, responsive UI.

---

### 1. Prerequisites

- **Node.js**: v18 or later is recommended
- **npm**: comes bundled with Node.js
- **Internet access**: required because API calls use `https://jsonplaceholder.typicode.com`

You can verify your versions with:

```bash
node -v
npm -v
```

If you do not have Node.js installed, download it from the official site:

- Node.js: `https://nodejs.org`

---

### 2. Getting the Project Code

You can obtain the project in either of these ways:

- **Option 1: Clone via Git (recommended)**

  - Make sure Git is installed: `https://git-scm.com`
  - In your terminal, choose a folder where you want the project and run:

    ```bash
    git clone https://github.com/Vishalvishwakarma11/task-dashboard.git
    cd task-dashboard
    ```

- **Option 2: Download ZIP**
  - Download the project ZIP from your source (Git hosting or file share)
  - Extract the ZIP
  - Open a terminal in the extracted `task-dashboard` folder

> After these steps, your working directory in the terminal should be the project root (the folder that contains `package.json`).

---

### 3. Install Dependencies (Packages)

From the project root (`/task-dashboard`), install all required npm packages using **npm**. This will read `package.json` and `package-lock.json` and install the correct versions.

```bash
npm install
```

This command will install:

- **Runtime dependencies** (from `dependencies`):
  - `react`, `react-dom`
  - `react-router-dom`
  - `@reduxjs/toolkit`, `react-redux`
  - `axios`
  - `react-hook-form`, `@hookform/resolvers`, `zod`
  - `react-icons`
  - `sweetalert2`
- **Development dependencies** (from `devDependencies`):
  - `vite`, `@vitejs/plugin-react`
  - `tailwindcss`, `@tailwindcss/cli`, `@tailwindcss/vite`
  - `postcss`, `autoprefixer`
  - `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`

> **Do not** manually install these one by one. Running `npm install` once is enough.

If installation fails, common fixes are:

- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Ensure you are using a recent Node.js version (v18+)

---

### 4. Running the App in Development Mode

After installing dependencies, start the Vite dev server:

```bash
npm run dev
```

- By default, Vite runs at `http://localhost:5173` (terminal will show the exact URL)
- Open that URL in your browser
- The dev server supports **Hot Module Replacement (HMR)**, so changes are reflected without full reloads

If you need a different port (for example `3000`):

```bash
npm run dev -- --port 3000
```

Stop the dev server anytime with `Ctrl + C` in the terminal.

---

### 5. Building for Production

To create an optimized production build in the `dist` folder:

```bash
npm run build
```

This will:

- Run Vite in build mode
- Generate minified, optimized static files into `dist`

You can then preview the production build locally with:

```bash
npm run preview
```

By default, preview also runs on a local port shown in the terminal (often `4173`).

---

### 6. Linting (Code Quality Checks)

This project includes ESLint configuration for React and Vite. To run lint checks:

```bash
npm run lint
```

- Fix any reported issues manually, or
- Enable ESLint auto-fix in your editor if supported

---

### 7. Project Structure (Important Files & Folders)

- **`index.html`**: Main HTML entry used by Vite
- **`src/main.jsx`**: React entry file; mounts the React app
- **`src/App.jsx`**: Top-level component that wires together routes/layout
- **`src/index.css`**: Global styles (Tailwind base + any custom styles)
- **`src/api/axiosInstance.js`**: Pre-configured Axios instance with:
  - `baseURL` set to `https://jsonplaceholder.typicode.com`
  - Request/response interceptors
  - Error handling using `sweetalert2`
- **`src/store/index.js` & `src/store/tasksSlice.js`**:
  - Redux store configuration
  - Task-related slice for state management
- **`src/components/`**:
  - Reusable components like `Button`, `Card`, `Input`, `Sidebar`, `TaskItem`
- **`src/pages/`**:
  - `Dashboard.jsx`: main dashboard view
  - `Tasks.jsx`: list of tasks
  - `CreateTask.jsx`: task creation form (uses React Hook Form + Zod validation)
  - `Profile.jsx`: user profile page (if implemented)
- **`tailwind.config.js`**: Tailwind CSS configuration
- **`vite.config.js`**: Vite configuration for React + Tailwind
- **`eslint.config.js`**: ESLint configuration

You should not need to change config files just to run the project.

---

### 8. Environment & API Configuration

Currently, the Axios instance is configured with a hard-coded base URL:

- `baseURL`: `https://jsonplaceholder.typicode.com`

There are **no `.env` files required** to run the project as-is. However, if you later want to point to a different backend API, you can:

1. Update `src/api/axiosInstance.js` directly, **or**
2. Introduce environment variables via Vite (e.g. `VITE_API_BASE_URL`) and read them in `axiosInstance.js`.

After any such changes, restart the dev server (`Ctrl + C`, then `npm run dev`).

---

### 9. Running the App End-to-End (Summary of All Steps)

1. **Install prerequisites**
   - Install Node.js (v18+), npm, and Git (optional but recommended)
2. **Get the project code**
   - Clone the repo or download & extract the ZIP
3. **Open a terminal in the project root**
   - Confirm `package.json` is present in the current folder
4. **Install packages**

   - Run:

     ```bash
     npm install
     ```

5. **Start the dev server**

   - Run:

     ```bash
     npm run dev
     ```

   - Open the URL shown in the terminal (e.g. `http://localhost:5173`)

6. **(Optional) Run lint checks**

   - Run:

     ```bash
     npm run lint
     ```

7. **(Optional) Create a production build**

   - Run:

     ```bash
     npm run build
     ```

   - Preview with:

     ```bash
     npm run preview
     ```

Follow these steps and you will have the Task Dashboard running locally with all required packages installed and all main scripts available.
