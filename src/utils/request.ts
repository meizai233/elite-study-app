import type { IResponseBase, IResponsePage } from "@/typings/api";

// export const baseUrl = 'http://47.121.207.171/api';
// 后面换成域名
export const baseUrl = "http://127.0.0.1:8888/api";

type ToReturnRes<T, P extends boolean> = P extends true ? IResponsePage<T> : IResponseBase<T>;

export interface UniappResponse<T, P extends boolean> {
  statusCode: number;
  errMsg: string;
  header: {
    "content-type": string;
  };
  data: ToReturnRes<T, P>;
}

/**
 * 模拟响应拦截器
 */
function interceptorsResponse<T, P extends boolean>(res: UniappResponse<T, P>) {
  const data = res.data as ToReturnRes<T, P>;

  return data;
}

/**
 * 模拟请求拦截器
 */
function interceptorsRequest(req?: Omit<UniNamespace.RequestOptions, "url">) {
  req = req || {};
  const { token } = $(useUser());
  if (token) {
    req.header = req.header || {};
    req.header.authorization = token;
  }

  return req;
}

export default async function request<T = null, P extends boolean = false>(url: string, req?: Omit<UniNamespace.RequestOptions, "url">) {
  return (
    (await uni
      .request({ url: `${baseUrl}${url}`, ...interceptorsRequest(req) })
      // @ts-expect-error-error
      .then(
        // @ts-expect-error-error
        (res) => interceptorsResponse(res)
      )) as ToReturnRes<T, P>
  );
}
