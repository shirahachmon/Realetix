import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Temporary mock until your backend is ready:
type Property = { id: string; name: string; address: string; city: string; units: number };
async function getProperty(id: string): Promise<Property> {
  // Replace with: const { data } = await http.get(`/properties/${id}`); return data;
  const fake: Record<string, Property> = {
    "1": { id: "1", name: "Garden View", address: "Herzl 10", city: "Tel Aviv", units: 12 },
    "2": { id: "2", name: "Sea Breeze", address: "Hagana 5", city: "Haifa", units: 8 },
  };
  return Promise.resolve(fake[id] ?? fake["1"]);
}

export function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["property", id],
    queryFn: () => getProperty(id!),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading…</p>;
  if (error || !data) return <p>Not found.</p>;

  return (
    <article>
      <h2>{data.name}</h2>
      <p>{data.address}, {data.city}</p>
      <p>Units: {data.units}</p>
    </article>
  );
}
