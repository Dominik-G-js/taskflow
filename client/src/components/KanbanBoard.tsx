import { useTasks } from "@/hooks/useTasks";
import { useUpdateTask } from "@/hooks/useUpdateTask";
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';
import TaskCard from "./TaskCard";

const KanbanBoard = () => {
  const { data: tasks, error, isLoading } = useTasks();
  const { mutate: updateTask } = useUpdateTask();

  const columns = {
    TODO: { name: 'To Do', items: tasks?.filter(t => t.status === 'TODO') || [] },
    IN_PROGRESS: { name: 'In Progress', items: tasks?.filter(t => t.status === 'IN_PROGRESS') || [] },
    DONE: { name: 'Done', items: tasks?.filter(t => t.status === 'DONE') || [] },
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }
    updateTask({
      id: parseInt(draggableId),
      data: { status: destination.droppableId }
    });
  };

  if (isLoading) return <p className="text-center p-10">Načítání úkolů...</p>;
  if (error) return <p className="text-center p-10 text-red-500">{error.message}</p>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(columns).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-gray-800">{column.name}</h2>
                <div className="space-y-4 min-h-[100px]">
                  {column.items.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TaskCard task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;