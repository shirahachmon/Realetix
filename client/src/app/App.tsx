// src/app/App.tsx
import { Outlet, Link } from "react-router-dom";

export function App() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <header style={{ display: "flex", gap: 16 }}>
        <h1>Realetix</h1>
        <nav><Link to="/">Properties</Link></nav>
      </header>
      <Outlet />
    </div>
  );
}
