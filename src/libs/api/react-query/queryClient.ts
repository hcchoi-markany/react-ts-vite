import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
  },
});

export default queryClient;
