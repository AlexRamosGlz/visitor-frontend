import { CounterResponse } from "@/Features/Counter/types/response.type";
import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiClient } from "@/shared/api/client_api";

class CounterApi {
    async getCount(): Promise<CounterResponse> {
        const { data, error } = await apiClient.get<CounterResponse>(ENDPOINTS.COUNTER.BASE);
        if (error) {
            throw error;
        }
        return data;    
    }
}

export const counterApi = new CounterApi();
