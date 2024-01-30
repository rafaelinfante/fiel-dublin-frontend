export interface SignInProviders {
  provider: string;
  icon: string;
}
export interface LoginData {
  username: string;
  password: string;
}

export interface RestErrorResponse {
  readonly headers: any;
  readonly status: number;
  readonly statusText: string;
  readonly url: string;
  readonly ok: boolean;
  readonly name: string;
  readonly message: string;
  readonly error: RestErrorResponseInfo;
}

export interface RestErrorResponseInfo {
  readonly description: string;
  readonly message: string | string[];
  readonly statusCode: number;
  readonly timestamp: string;
}
