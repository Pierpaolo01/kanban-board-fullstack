import type { KanbanColumn } from "@/types/kanbanColumn";

export interface KanbanBoard {
  id: number;
  name: string;
  Columns: Array<KanbanColumn>;
  UserId: number;
}

export interface KanbanBoardForm {
  name: string;
  columns: Array<string>;
}
