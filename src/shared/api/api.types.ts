export interface ApiResponse<T> {
    data: T;
    message: string;
    details?: any;
    error?: any;
}

export interface IApiError {
    message: string;
    details?: any;
}