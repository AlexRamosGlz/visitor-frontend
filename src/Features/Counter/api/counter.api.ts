import { CounterResponse } from "@/Features/Counter/types/response.type";
import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiClient } from "@/shared/api/client_api";
import {IApiError} from "@/shared/api/api.types";

class CounterApi {
    async getCount(id: number): Promise<{ data: CounterResponse | null; error: IApiError | null }> {
        const { data, error } = await apiClient.get<CounterResponse>(ENDPOINTS.COUNTER.BASE(id));
        if (error) {
            return { data: null, error };
        }
        return { data, error: null };    
    }

    async increment(id: number): Promise<{ data: CounterResponse | null; error: IApiError | null }> {
        const { data, error } = await apiClient.patch<CounterResponse>(ENDPOINTS.COUNTER.BASE(id), null);
        if (error) {
            return { data: null, error };
        }
        return { data, error: null };
    }
}

export const counterApi = new CounterApi();
