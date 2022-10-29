import axios from "axios";
import type { AxiosPromise } from "axios";
import type { ApiResponse } from "@/types/apiResponse";
import type { KanbanBoard } from "@/types/kanbanBoard";
import type { KanbanBoardForm } from "@/types/kanbanBoard";
import type { KanbanTask, KanbanTaskForm } from "@/types/kanbanTask";

export default class KanbanService {
  public static getAllBoards(): AxiosPromise<ApiResponse<Array<KanbanBoard>>> {
    return axios.get("/api/boards");
  }

  public static createBoard(
    payload: KanbanBoardForm
  ): AxiosPromise<ApiResponse<KanbanBoard>> {
    return axios.post("/api/boards/create", payload);
  }

  public static getBoard(
    boardId: string | number
  ): AxiosPromise<ApiResponse<KanbanBoard>> {
    return axios.get(`/api/boards/${boardId}`);
  }

  public static updateBoard(
    boardId: number | string,
    payload: KanbanBoard
  ): AxiosPromise<ApiResponse<KanbanBoard>> {
    return axios.put(`/api/boards/${boardId}`, payload);
  }

  public static deleteColumn(boardId: number, columnId: number) {
    return axios.delete(`/api/boards/${boardId}/column/${columnId}`);
  }

  public static addNewColumn(boardId: number, name: string) {
    return axios.post(`/api/boards/${boardId}/column`, { name });
  }

  public static addTask(
    boardId: number,
    newTask: KanbanTaskForm
  ): AxiosPromise<ApiResponse<KanbanTask>> {
    return axios.post(`/api/boards/${boardId}/tasks`, newTask);
  }
}
