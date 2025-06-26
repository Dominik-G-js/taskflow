import axios from 'axios';
import type { Task } from '@/types/Task';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await apiClient.get<Task[]>('/tasks');
  return response.data;
}

export const createTask = async (taskData: { title: string, content?: string }): Promise<Task> => {
    const response = await apiClient.post<Task>('/tasks', taskData);
    return response.data;
  }


  export const deleteTask = async (id: number): Promise<void> => {
    await apiClient.delete(`/tasks/${id}`);
  }

  export interface UpdateTaskData {
    title?: string;
    content?: string;
    status?: string;
  }
  
  // Přidejte tento nový export
  export const updateTask = async (id: number, taskData: UpdateTaskData): Promise<Task> => {
    const response = await apiClient.patch<Task>(`/tasks/${id}`, taskData);
    return response.data;
  }