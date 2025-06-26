export interface Task {
  id: number;
  title: string;
  content: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}