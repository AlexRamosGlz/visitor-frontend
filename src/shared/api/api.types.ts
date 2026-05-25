export interface ApiResponse<T> {
    data: T;
    message: string;
    details: number;
    code: number;
    Error?: any;
}

export interface IApiError {
    message: string;
    details?: any;
    code?: number;
}