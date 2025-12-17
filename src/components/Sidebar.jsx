import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome, HiClipboardList, HiUser, HiSparkles } from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white flex-shrink-0 shadow-lg relative overflow-hidden">
      {/* Logo Section */}
      <div className="relative z-10 p-6 border-b border-slate-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <HiClipboardList className="text-2xl text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white">Task Dashboard</h1>
            <p className="text-xs text-slate-400 mt-0.5">Productivity Hub</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mt-4 px-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 mb-1 rounded-lg transition-all duration-300 group ${
              isActive
                ? "bg-slate-800 text-white shadow-sm"
                : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <HiHome className="text-lg" />
              <span className="font-medium text-sm">Dashboard</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 mb-1 rounded-lg transition-all duration-300 group ${
              isActive
                ? "bg-slate-800 text-white shadow-sm"
                : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <HiClipboardList className="text-lg" />
              <span className="font-medium text-sm">Tasks</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 mb-1 rounded-lg transition-all duration-300 group ${
              isActive
                ? "bg-slate-800 text-white shadow-sm"
                : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <HiUser className="text-lg" />
              <span className="font-medium text-sm">Profile</span>
            </>
          )}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
