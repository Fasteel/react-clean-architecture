import { FC } from "react";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderImported,
  useQuery,
} from "react-query";

enum CacheKeys {
  Todos = "TODOS",
}

const queryClient = new QueryClient();

const QueryClientProvider: FC = ({ children }) => {
  return (
    <QueryClientProviderImported client={queryClient}>
      {children}
    </QueryClientProviderImported>
  );
};

export { QueryClientProvider, useQuery, CacheKeys };
