export enum ModalType {
    Login = 'login',
    SignUp = 'signup',
}

export enum AuthStrategy {
    Google = 'oauth_google',
}

export interface User {
    avatar_url: string;
    email: string;
    first_name: string;
    id: string;
    username: null;
}