import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "./store/tasksSlice";
import axiosInstance from "./api/axiosInstance";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import CreateTask from "./pages/CreateTask";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tasks.length === 0) {
      axiosInstance
        .get("/todos")
        .then((res) => {
          const limited = res.data
            .slice(0, 20)
            .map((t) => ({ ...t, description: "" }));
          dispatch(setTasks(limited));
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    } else {
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, [dispatch, tasks.length]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-200 border-t-slate-900 mx-auto mb-4"></div>
          </div>
          <p className="text-base font-semibold text-slate-700 mt-4">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex h-screen bg-slate-50">
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <main className="flex-1 overflow-y-auto p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/tasks/create" element={<CreateTask />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
