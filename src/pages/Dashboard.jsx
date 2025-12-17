import React from "react";
import { useSelector } from "react-redux";
import {
  HiClipboardList,
  HiCheckCircle,
  HiClock,
  HiTrendingUp,
  HiSparkles,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;
  const completionRate =
    tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 bg-slate-800 rounded-xl shadow-sm">
            <HiSparkles className="text-2xl text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 leading-tight">
              Welcome Back!
            </h1>
            <p className="text-base text-slate-600 mt-1 font-medium">
              Here's your productivity overview
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Total Tasks Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2.5 bg-slate-100 rounded-lg">
              <HiClipboardList className="text-2xl text-slate-700" />
            </div>
            <HiTrendingUp className="text-xl text-slate-400" />
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-1 leading-none">
            {tasks.length}
          </p>
          <p className="text-sm text-slate-600 font-medium mb-3">Total Tasks</p>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-300 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        {/* Completed Tasks Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2.5 bg-emerald-50 rounded-lg">
              <HiCheckCircle className="text-2xl text-emerald-600" />
            </div>
            <HiTrendingUp className="text-xl text-slate-400" />
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-1 leading-none">
            {completed}
          </p>
          <p className="text-sm text-slate-600 font-medium mb-3">Completed</p>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
        </div>

        {/* Pending Tasks Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2.5 bg-amber-50 rounded-lg">
              <HiClock className="text-2xl text-amber-600" />
            </div>
            <HiTrendingUp className="text-xl text-slate-400" />
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-1 leading-none">
            {pending}
          </p>
          <p className="text-sm text-slate-600 font-medium mb-3">Pending</p>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-500 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${
                  tasks.length > 0
                    ? Math.round((pending / tasks.length) * 100)
                    : 0
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              Completion Rate
            </h2>
            <p className="text-sm text-slate-600">
              {completed} out of {tasks.length} tasks completed
            </p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-emerald-600">
              {completionRate}%
            </span>
          </div>
        </div>
        <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-slate-900 rounded-xl shadow-sm p-6 text-white">
        <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
        <p className="text-slate-300 mb-4 text-sm">
          Navigate to Tasks to manage your list and boost your productivity!
        </p>
        <Link to="/tasks">
          <button className="bg-white text-slate-900 font-semibold py-2.5 px-5 rounded-lg hover:bg-slate-50 transition-colors duration-300 text-sm">
            View All Tasks →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
