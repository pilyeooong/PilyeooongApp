import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  // 기본으로 api call 실패시 재요청 3회 함
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export default queryClient;
