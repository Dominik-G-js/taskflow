
import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "@/services/api-client";

export const useTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });
};