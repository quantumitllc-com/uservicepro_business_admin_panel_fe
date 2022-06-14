import { Routing } from "pages"
import { withProviders } from "./providers"
import "./index.scss"

const App = () => {
    return (
        // Потенциально сюда можно вставить
        // Единый на все приложение хедер
        // Либо же делать это на отдельных страницах
        <div className="app">
            <Routing />
        </div>
    )
}

export default withProviders(App)