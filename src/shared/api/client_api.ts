import { IApiError, ApiResponse } from './api.types';

class ApiClient {

    private isApiError(data: any): data is ApiError {
        return data && typeof data.message === 'string';
    }

    private async request<T>(method: string, url: string, body?: any): Promise<ApiResponse<T> | ApiError> {
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body ? JSON.stringify(body) : undefined,
            });
            return this.handleResponse<T>(response);
        } catch (error) {
            return new ApiError('Count fetching failed', error instanceof Error ? error.message : String(error), 500);
        }
    }

    private async handleResponse<T>(response: Response): Promise<ApiResponse<T> | ApiError> {
        try {
            const apiResponse = await response.json();
            if (this.isApiError(apiResponse)) {
                return new ApiError(apiResponse.message, apiResponse.details, apiResponse.code);
            }
            return apiResponse as ApiResponse<T>;
        } catch (error) {
            return new ApiError('Count fetching failed', error instanceof Error ? error.message : String(error), 500);
        }
    }

    public async get<T>(url: string): Promise<{data: T | null; error: ApiError | null}> {
        const result = await this.request<T>('GET', url);
        if (result instanceof ApiError) {
            return { data: null, error: result };
        }
        return { data: result.data, error: null };
    }
}

class ApiError extends Error {
    public code?: number;

    constructor(message: string, public details?: string, code?: number) {
        super(message);
        this.code = code;
    }
}

export const apiClient = new ApiClient();