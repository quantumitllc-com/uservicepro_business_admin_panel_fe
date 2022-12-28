import "react-toastify/dist/ReactToastify.css"

import { Routing } from "pages"
import { withProviders } from "./providers"

import "./index.scss"

function App() {
	return (
		<div className="app">
			<Routing />
		</div>
	)
}

export default withProviders(App)
