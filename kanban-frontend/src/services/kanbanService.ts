import axios from "axios";
import type { AxiosPromise } from "axios";
import type { ApiResponse } from "@/types/apiResponse";
import type { KanbanBoard } from "@/types/kanbanBoard";
import type { KanbanBoardForm } from "@/types/kanbanBoard";

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

  public static deleteColumn(id: number) {
    return axios.delete("todo");
  }
}
