import type { Task } from "@/types/Task";
import { Button } from "../services/components/ui/button";
import { useDeleteTask } from "@/hooks/useDeleteTask";
import { useUpdateTask } from "@/hooks/useUpdateTask";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../services/components/ui/select";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { mutate: deleteTask } = useDeleteTask();
  const { mutate: updateTask } = useUpdateTask();

  const handleStatusChange = (newStatus: string) => {
    updateTask({ id: task.id, data: { status: newStatus } });
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-sm border text-gray-800">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg mb-2">{task.title}</h3>
        <Button variant="destructive" size="icon" className="h-7 w-7 flex-shrink-0" onClick={() => deleteTask(task.id)}>
          X
        </Button>
      </div>
      <p className="text-gray-600 text-sm mb-4">{task.content}</p>
      <Select value={task.status} onValueChange={handleStatusChange}>
        <SelectTrigger>
          <SelectValue placeholder="Změnit status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="TODO">To Do</SelectItem>
          <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
          <SelectItem value="DONE">Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TaskCard;