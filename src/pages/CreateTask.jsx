import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Swal from "sweetalert2";
import { addTask } from "../store/tasksSlice";
import { HiPlus, HiX, HiSparkles, HiClipboardCheck } from "react-icons/hi";

const schema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  status: z.enum(["Pending", "Completed"]),
});

const CreateTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { status: "Pending" },
  });

  const onSubmit = (data) => {
    const newTask = {
      id: Date.now(),
      title: data.title,
      description: data.description || "",
      completed: data.status === "Completed",
      userId: 1,
    };
    dispatch(addTask(newTask));
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Task created successfully!",
      timer: 3000,
      showConfirmButton: false,
    });
    navigate("/tasks");
  };

  return (
    <div className="max-w-2xl w-full mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-slate-800 rounded-xl shadow-sm">
            <HiPlus className="text-2xl text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 leading-tight">
              Create New Task
            </h1>
            <p className="text-base text-slate-600 mt-1 font-medium">
              Add a new task to your dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Title Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <div className="p-1.5 bg-slate-800 rounded-lg">
                <HiClipboardCheck className="text-white text-sm" />
              </div>
              Task Title <span className="text-red-600">*</span>
            </label>
            <input
              {...register("title")}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:border-slate-500 transition-all bg-white text-sm hover:border-slate-400"
              placeholder="Enter a descriptive title..."
            />
            {errors.title && (
              <div className="mt-2 p-3 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <p className="text-red-600 font-medium text-sm">
                  {errors.title.message}
                </p>
              </div>
            )}
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <div className="p-1.5 bg-slate-800 rounded-lg">
                <HiSparkles className="text-white text-sm" />
              </div>
              Description{" "}
              <span className="text-slate-400 text-xs font-normal">
                (optional)
              </span>
            </label>
            <textarea
              {...register("description")}
              rows={5}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:border-slate-500 transition-all bg-white text-sm resize-none hover:border-slate-400"
              placeholder="Add detailed information about your task..."
            />
          </div>

          {/* Status Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <div className="p-1.5 bg-slate-800 rounded-lg">
                <HiClipboardCheck className="text-white text-sm" />
              </div>
              Status
            </label>
            <select
              {...register("status")}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:border-slate-500 transition-all bg-white text-sm cursor-pointer hover:border-slate-400"
            >
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-5 border-t border-slate-200">
            <button
              disabled={schema.status == "Pending"}
              type="submit"
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <HiPlus className="text-sm" />
              Create Task
            </button>
            <button
              type="button"
              onClick={() => navigate("/tasks")}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg shadow-sm transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <HiX className="text-sm" />
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Tips Card */}
      <div className="mt-6 bg-slate-50 rounded-lg p-4 border border-slate-200">
        <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2 text-sm">
          <HiSparkles className="text-slate-600 text-sm" />
          Pro Tip
        </h3>
        <p className="text-slate-600 text-sm font-medium">
          Use clear, actionable titles and detailed descriptions to stay
          organized and track your progress effectively!
        </p>
      </div>
    </div>
  );
};

export default CreateTask;
