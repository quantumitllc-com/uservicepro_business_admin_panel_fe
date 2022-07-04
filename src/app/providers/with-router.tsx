import React, { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"

export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        {/*TODO: Loading*/}
        <Suspense fallback="Loading...">
            {component()}
        </Suspense>
    </BrowserRouter>
)