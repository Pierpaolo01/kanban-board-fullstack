import axios from "axios";
import type { AxiosPromise } from "axios";
import type {ApiResponse} from "../types/ApiResponse";
import type {AuthenticationForm} from "../types/AuthenticationForm";

export default class UserService {
    public static signUp(payload: AuthenticationForm): AxiosPromise<ApiResponse<string>> {
        return axios.post('/api/sign-up', payload);
    }
    
    public static login(payload: AuthenticationForm): AxiosPromise<ApiResponse<string>> {
        return axios.post('/api/login', {username: payload.username, password: payload.password})
    }
}