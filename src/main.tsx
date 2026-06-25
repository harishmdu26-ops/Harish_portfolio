import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import NotFound from "./pages/NotFound";
import "./styles.css";

// Restore route after GitHub Pages 404.html SPA redirect.
const redirect = sessionStorage.getItem("spa-redirect");
if (redirect) {
  sessionStorage.removeItem("spa-redirect");
  if (redirect !== "/") window.history.replaceState(null, "", "/Harish_portfolio" + redirect);
}

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "*", element: <NotFound /> },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);