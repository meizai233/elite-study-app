export type SendCodeType = "login" | "register" | "change";
export type Data<T> = T extends undefined | null ? null : T;

export interface IResponsePage<T> {
  msg: string;
  code: number;
  data: IPage<T>;
}

export interface IResponseBase<T> {
  msg: string;
  code: number;
  data: Data<T>;
}

export interface IPage<T> {
  total_page: number;
  current_data: T[];
  total_record: number;
}
