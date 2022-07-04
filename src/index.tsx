import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import { ThemeProvider } from "evergreen-ui"
import { theme } from "./shared/ui/theme"

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
)
root.render(
    <React.StrictMode>
        <ThemeProvider value={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
