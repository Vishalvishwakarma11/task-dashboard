import React from "react";

const TaskItem = ({ task, onToggle }) => {
  return (
    <div className="flex items-start gap-4">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
        className="checkbox checkbox-primary mt-1"
      />
      <div className="flex-1">
        <h3
          className={`text-xl font-semibold ${
            task.completed ? "line-through text-base-content/60" : ""
          }`}
        >
          {task.title}
        </h3>
        {task.description && (
          <p className="text-base-content/70 mt-2">{task.description}</p>
        )}
        <div className="mt-4">
          <span
            className={`badge ${
              task.completed ? "badge-success" : "badge-warning"
            } badge-lg`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
