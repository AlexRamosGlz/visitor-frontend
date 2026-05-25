import { CounterResponse, CounterPayload } from "@/Features/Counter/types/response.type";
import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiClient } from "@/shared/api/client_api";
import {IApiError} from "@/shared/api/api.types";

class CounterApi {
    async getCount(): Promise<{ data: CounterResponse | null; error: IApiError | null }> {
        const { data, error } = await apiClient.get<CounterResponse>(ENDPOINTS.COUNTER.BASE);
        if (error) {
            return { data: null, error };
        }
        return { data, error: null };    
    }

    async increment(pyaload: CounterPayload): Promise<{ data: CounterResponse | null; error: IApiError | null }> {
        const { data, error } = await apiClient.post<CounterResponse>(`${ENDPOINTS.COUNTER.BASE}/increment`, { pyaload });
        if (error) {
            return { data: null, error };
        }
        return { data, error: null };
    }
}

export const counterApi = new CounterApi();
