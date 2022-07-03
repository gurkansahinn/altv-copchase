export enum LoginEvents {
  TryLogin = 'Login:TryLogin',
}

export interface LoginDto {
  username: string;
  password: string;
}