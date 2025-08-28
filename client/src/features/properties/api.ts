import { http } from "@/shared/lib/http";

export type Property = {
  id: string;
  name: string;
  address: string;
  city: string;
  units: number;
};

// GET /properties
export async function listProperties(): Promise<Property[]> {
  const { data } = await http.get("/properties");
  return data;
}

// GET /properties/:id
export async function getProperty(id: string): Promise<Property> {
  const { data } = await http.get(`/properties/${id}`);
  return data;
}
