// client/src/hooks/useCreateTask.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "@/services/api-client";

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask, 
    onSuccess: () => {

      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};