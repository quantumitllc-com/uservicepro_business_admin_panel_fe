import { lazy } from "react"
import {
    Routes,
    Route
} from "react-router-dom"

const TestPage = lazy(() => import("./test"))
const SignIn = lazy(() => import("./sign-in"))

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    )
}