declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

export type User = {
  userName: string;
  password: string;
};

export type RegistrationRequestData = {
  userName: string;
  password: string;
};

export type LoginData = {
  userName: string;
  password: string;
};

export enum API_RESPONSE_STATUS {
  SUCCESS = 200,
  NOT_AUTHORIZED = 401,
  SERVER_ERROR = 500,
}
