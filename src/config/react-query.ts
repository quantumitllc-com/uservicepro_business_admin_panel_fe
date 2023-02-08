import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
		},
	},
	// queryCache: new QueryCache({
	// 	onError: (error: any) => {
	// 		if (error?.response?.data?.detail) {
	// 			notifyError(error?.response?.data?.detail)
	// 		} else {
	// 			notifyError(error.message)
	// 		}
	// 	},
	// }),
})
