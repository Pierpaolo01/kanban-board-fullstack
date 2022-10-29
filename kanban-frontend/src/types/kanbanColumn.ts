import type { KanbanTask } from "@/types/kanbanTask";

export interface KanbanColumn {
  id: number;
  name: string;
  BoardId: number;
  Tasks: Array<KanbanTask>;
}
