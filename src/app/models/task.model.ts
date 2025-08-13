export interface Task {
  createdAt: Date;
  id?: number;
  title: string;
  description?: string;
  due?: string;
  completed?: boolean;
}
