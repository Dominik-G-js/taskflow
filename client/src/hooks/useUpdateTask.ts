// client/src/hooks/useUpdateTask.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "@/services/api-client";
import type { UpdateTaskData } from "@/services/api-client";
import type { Task } from "@/types/Task";

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number, data: UpdateTaskData }) => updateTask(id, data),

    // Zde začíná kouzlo "Optimistic Update"
    onMutate: async (updatedTask) => {
      // Zrušíme probíhající dotazy na seznam úkolů, aby nepřepsaly naši optimistickou změnu
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      // Uložíme si aktuální seznam úkolů pro případ, že by se něco pokazilo
      const previousTasks = queryClient.getQueryData<Task[]>(['tasks']);

      // Optimisticky aktualizujeme cache: najdeme úkol a změníme jeho status
      queryClient.setQueryData<Task[]>(['tasks'], (oldTasks = []) =>
        oldTasks.map(task => 
          task.id === updatedTask.id ? { ...task, ...updatedTask.data } : task
        )
      );

      // Vrátíme si původní data pro případný rollback
      return { previousTasks };
    },
    // Pokud mutace selže, vrátíme zpět původní data
    onError: (err, updatedTask, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
    },
    // Po úspěchu i neúspěchu mutace vždy znovu načteme data ze serveru, abychom měli jistotu
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
