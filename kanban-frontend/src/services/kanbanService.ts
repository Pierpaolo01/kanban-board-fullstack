import axios from "axios";
import type { AxiosPromise } from "axios";
import type { ApiResponse } from "../types/ApiResponse";
import type { KanbanBoard } from "../types/KanbanBoard";
import type { KanbanBoardForm } from "../types/KanbanBoard";

export default class KanbanService {
    public static getAllBoards(): AxiosPromise<ApiResponse<KanbanBoard>> {
        return axios.get('/api/boards');
    }

    public static createBoard(payload: KanbanBoardForm): AxiosPromise<ApiResponse<KanbanBoard>> {
        return axios.post('/api/boards/create', payload);
    }
}