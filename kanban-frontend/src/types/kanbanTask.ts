import type { KanbanColumn } from "@/types/kanbanColumn";

export interface KanbanTask {
  id: number;
  title: string;
  description: string;
  subtasks: Array<Subtask>;
  ColumnId: number;
}

export interface Subtask {
  name: string;
  isDone: boolean;
}

export interface KanbanTaskForm {
  title: string;
  description: string;
  subtasks: Array<Subtask>;
  column: KanbanColumn;
}
