import { ROUTES } from "@/constants/routes";
import { http } from "./api";
import { IApartments } from "@/types/apartment";

export async function getAllApartments(): Promise<any> {
  const resp: any = await http({
    url: ROUTES.APARTMENTS,
    method: "GET",
  });

  if (resp.status === 1 && resp.data) {
    return resp;
  }
  return resp;
}

export async function addApartment(body: any): Promise<any> {
  const resp: any = await http({
    url: ROUTES.APARTMENTS,
    method: "POST",
    body,
  });
  if (resp.status === 1 && resp.data) {
    return resp;
  }
  return resp;
}

export async function getApartmentByID(id: string): Promise<any> {
  const resp: any = await http({
    url: `${ROUTES.APARTMENTS}/${id}`,
    method: "GET",
  });
  if (resp.status === 1 && resp.data) {
    return resp;
  }
  return resp;
}
