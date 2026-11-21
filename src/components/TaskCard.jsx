import { Pencil, Trash2 } from "lucide-react";

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  const date = new Date(task.dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <li className="task-row">
      <div className="task-main">
        <div className="task-title">{task.title}</div>
        <div className="task-desc">{task.description}</div>
      </div>
      <span className="badge category">{task.category}</span>
      <span className={`badge priority-${task.priority.toLowerCase()}`}>{task.priority}</span>
      <select
        className={`status-select status-${task.status.toLowerCase().replace(" ", "-")}`}
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value)}
        aria-label={`Status for ${task.title}`}
      >
        <option>To do</option>
        <option>In progress</option>
        <option>Completed</option>
      </select>
      <span className="task-date">{date}</span>
      <div className="task-actions">
        <button onClick={() => onEdit(task)} aria-label={`Edit ${task.title}`}><Pencil size={16} /></button>
        <button onClick={() => onDelete(task)} aria-label={`Delete ${task.title}`}><Trash2 size={16} /></button>
      </div>
    </li>
  );
}