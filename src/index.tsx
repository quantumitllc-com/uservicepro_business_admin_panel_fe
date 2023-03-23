import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "evergreen-ui"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "config/react-query"

import { ToastContainer } from "react-toastify"
import App from "./app"
import theme from "./config/theme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
	<ThemeProvider value={theme}>
		<QueryClientProvider client={queryClient}>
			<App />
			<ToastContainer />
		</QueryClientProvider>
	</ThemeProvider>,
)
