import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { PropertiesList } from "@/features/properties/pages/PropertiesList";
import { PropertyDetails } from "@/features/properties/pages/PropertyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <PropertiesList /> },
      { path: "properties/:id", element: <PropertyDetails /> },
    ],
  },
]);
