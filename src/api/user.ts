import type { SendCodeType } from "@/typings/api";
import request from "@/utils/request";

/**
 * 注册
 */
export function register(data: { phone: string; code: string }) {
  return request<string>("/user/v1/register", { data, method: "POST" });
}

/**
 * 发送短信
 */
export function sendCode(data: { phone: string; captcha: string; type: SendCodeType }) {
  return request("/notify/v1/send_code", { data, method: "POST" });
}
