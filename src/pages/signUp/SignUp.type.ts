// features/signUp/signUp.type.ts

export interface SignUpPayload {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    mobile: string;
    // Add other fields as per API response
  };
}

export interface SignUpState {
  loading: boolean;
  user: SignUpResponse['user'] | null;
  error: string | null;
}
