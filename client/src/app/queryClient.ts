import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,            // cache fresh for 60s
      refetchOnWindowFocus: false,  // don’t refetch on tab focus
    },
  },
});
