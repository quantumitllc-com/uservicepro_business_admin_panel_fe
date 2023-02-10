import { toast } from "react-toastify"
import { QueryCache, QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
		},
	},
	queryCache: new QueryCache({
		onError: (error: any) => {
			if (error?.response?.data?.message) {
				toast.error(error?.response?.data?.message, {
					position: "top-right",
					autoClose: 10000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					progressClassName: "toastProgress",
				})
			} else {
				toast.error(error?.message, {
					position: "top-right",
					autoClose: 10000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					progressClassName: "toastProgress",
				})
			}
		},
	}),
})
