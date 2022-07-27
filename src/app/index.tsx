import { Routing } from "pages"
import { withProviders } from "./providers"

import "./index.scss"

const App = () => {
    const tempVar = 5

    return (
        <div className="app">
            <Routing />
        </div>
    )
}

export default withProviders(App)
