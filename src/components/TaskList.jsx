import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onEdit, onDelete, onStatusChange }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks found.</p>;
  }
  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <TaskCard
          key={t.id}
          task={t}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </ul>
  );
}