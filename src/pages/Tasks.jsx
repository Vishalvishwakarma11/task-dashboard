import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTask, setFilter, removeTask } from "../store/tasksSlice";
import Swal from "sweetalert2";
import {
  HiPlus,
  HiSearch,
  HiCheckCircle,
  HiClock,
  HiTrash,
  HiSortAscending,
  HiSparkles,
  HiClipboardList,
} from "react-icons/hi";

const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  let displayed = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (sortConfig) {
    displayed = [...displayed].sort((a, b) => {
      let aVal =
        sortConfig.key === "title"
          ? a.title.toLowerCase()
          : a.completed
          ? 1
          : 0;
      let bVal =
        sortConfig.key === "title"
          ? b.title.toLowerCase()
          : b.completed
          ? 1
          : 0;
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  const totalPages = Math.ceil(displayed.length / itemsPerPage);
  const paginated = displayed.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc")
      direction = "desc";
    setSortConfig({ key, direction });
  };

  const handleToggle = (id, currentStatus) => {
    dispatch(toggleTask(id));
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `Task marked as ${!currentStatus ? "completed" : "pending"}`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#ef4444",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeTask(id));
        Swal.fire({
          toast: true,
          icon: "success",
          title: "Task deleted!",
          timer: 1500,
          position: "top-end",
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-6">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-slate-800 rounded-xl shadow-sm">
              <HiSparkles className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 leading-tight">
                Tasks
              </h1>
              <p className="text-base text-slate-600 mt-1 font-medium">
                Manage and track your tasks
              </p>
            </div>
          </div>
        </div>
        <Link to="/tasks/create">
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 text-sm">
            <HiPlus className="text-base" /> Create New Task
          </button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-base z-10" />
          <input
            type="text"
            placeholder="Search tasks by title..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full max-w-md pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:border-slate-500 bg-white shadow-sm text-sm hover:border-slate-400 transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-600 font-semibold text-sm">Filter:</span>
          <button
            onClick={() => dispatch(setFilter("all"))}
            className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-300 ${
              filter === "all"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-200 hover:border-slate-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => dispatch(setFilter("completed"))}
            className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-1.5 ${
              filter === "completed"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-200 hover:border-emerald-300"
            }`}
          >
            <HiCheckCircle className="text-sm" />
            Completed
          </button>
          <button
            onClick={() => dispatch(setFilter("pending"))}
            className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-1.5 ${
              filter === "pending"
                ? "bg-amber-600 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-200 hover:border-amber-300"
            }`}
          >
            <HiClock className="text-sm" />
            Pending
          </button>
          <button
            onClick={() => requestSort("title")}
            className="px-3 py-1.5 rounded-lg font-medium text-sm bg-white text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-200 hover:border-slate-300 transition-all duration-300 flex items-center gap-1.5"
          >
            <HiSortAscending className="text-sm" />
            Sort
          </button>
        </div>
      </div>

      {/* Tasks Grid */}
      {paginated.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-slate-200">
          <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
            <HiClipboardList className="text-3xl text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            No tasks found
          </h3>
          <p className="text-slate-600 mb-5 text-sm">
            Create your first task to get started!
          </p>
          <Link to="/tasks/create">
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm">
              Create Task
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {paginated.map((task) => (
            <div
              key={task.id}
              className={`group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border ${
                task.completed
                  ? "bg-emerald-50 border-emerald-200 hover:border-emerald-300"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="relative z-10 p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggle(task.id, task.completed)}
                      className="h-4 w-4 rounded border-2 border-slate-300 text-slate-900 focus:ring-2 focus:ring-slate-500/50 cursor-pointer"
                    />
                    <div className="flex-1">
                      <h3
                        className={`text-sm font-semibold mb-1 ${
                          task.completed
                            ? "line-through text-slate-500"
                            : "text-slate-900"
                        }`}
                      >
                        {task.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {task.description && (
                  <p className="text-slate-600 mb-3 text-xs line-clamp-2">
                    {task.description}
                  </p>
                )}

                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      task.completed
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-600 text-white"
                    }`}
                  >
                    {task.completed ? (
                      <span className="flex items-center gap-1">
                        <HiCheckCircle className="text-xs" /> Completed
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <HiClock className="text-xs" /> Pending
                      </span>
                    )}
                  </span>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-200">
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-xs"
                  >
                    <HiTrash className="text-sm" />
                    Delete Task
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {displayed.length > 0 && (
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-700 font-semibold">
              Showing{" "}
              <span className="text-blue-600 font-bold">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="text-blue-600 font-bold">
                {Math.min(currentPage * itemsPerPage, displayed.length)}
              </span>{" "}
              of{" "}
              <span className="text-blue-600 font-bold">
                {displayed.length}
              </span>{" "}
              tasks
            </p>
            {totalPages > 1 && (
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-5 py-2 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-bold transition-all duration-300 transform hover:scale-105"
                >
                  « Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-5 py-2 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                      currentPage === i + 1
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-white border-2 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-5 py-2 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-bold transition-all duration-300 transform hover:scale-105"
                >
                  Next »
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
