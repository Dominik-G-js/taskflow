// client/src/hooks/useDeleteTask.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "@/services/api-client";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask, // Funkce, která se má zavolat
    onSuccess: () => {
      // Opět, po úspěšném smazání zneplatníme seznam úkolů,
      // aby se automaticky načetl znovu a zmizel z něj smazaný úkol.
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};