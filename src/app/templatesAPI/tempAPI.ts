export interface IResponseLogin {
  token: string;
  header: string;
  fio: string;
  departmen_name: string;
}

export interface IModification {
  description: string;
  dt_create: string;
  dt_plan: string;
  id: string;
  name: string;
  user_create: string;
}
