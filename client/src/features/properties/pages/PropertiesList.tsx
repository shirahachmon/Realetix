import { useQuery } from "@tanstack/react-query";

// Temporary mock until your backend is ready:
type Property = { id: string; name: string; city: string; units: number };
async function listProperties(): Promise<Property[]> {
  // Replace with: const { data } = await http.get("/properties"); return data;
  return Promise.resolve([
    { id: "1", name: "Garden View", city: "Tel Aviv", units: 12 },
    { id: "2", name: "Sea Breeze", city: "Haifa", units: 8 },
  ]);
}

export function PropertiesList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: listProperties,
  });

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Failed to load.</p>;

  return (
    <ul>
      {data!.map((p) => (
        <li key={p.id}>
          <a href={`/properties/${p.id}`}>{p.name}</a> — {p.city} · {p.units} units
        </li>
      ))}
    </ul>
  );
}
