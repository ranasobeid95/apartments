import { APIS } from "@/constants/api";
import { HttpClientParams, ResponseBody } from "@/types/api";

export const transformedResp = (status: any, data?: any): ResponseBody => {
  return {
    status: status ? 0 : 1,
    data: status ? null : data,
    error: { status, data: data && data.error ? data.error : { error: {} } },
  };
};

export async function http({
  method,
  body,
  json = true,
  url,
  headers,
}: HttpClientParams): Promise<any> {
  try {
    const resp = await fetch(`${APIS.PRODUCTION_URL}${url}`, {
      method: method || "GET",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
        Accept: "application/json",
      },
      body: body && JSON.stringify(body),
      cache: "no-store",
      credentials: "include",
    });
    if (json && resp.ok && resp.status != 204) {
      const data = await resp.json();
      return transformedResp(null, data);
    } else if (json && resp.ok && resp.status == 204) {
      return transformedResp(null, true);
    } else if (resp.ok && !json) {
      const result = await resp.text();
      return transformedResp(null, result);
    } else {
      if (resp.status !== 500) {
        const data = await resp.json();
        return transformedResp(resp.status, data);
      }
      return transformedResp(resp.status, null);
    }
  } catch (error) {
    //front-end error
    console.log(error, "error in catch http error");
    return transformedResp(error, null);
  }
}
