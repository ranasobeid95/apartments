import { ROUTES } from "@/constants/routes";
import { http } from "./api";

export async function getAllApartments(): Promise<any> {
  const resp: any = await http({
    url: ROUTES.APARTMENTS,
    method: "GET",
  });

  console.log("resp :>> ", resp);
  if (resp.status === 1 && resp.data) {
    return resp;
  }
  return resp;
}
