import { lazy } from "react"
import {
    Routes,
    Route
} from "react-router-dom"

const SignIn = lazy(() => import("./auth/sign-in"))
const SignUp = lazy(() => import("./auth/sign-up"))
const UserAccount = lazy(() => import("./auth/sign-up/user-account"))
const TypeAccount = lazy(() => import("./auth/sign-up/type-account"))

export const Routing = () => {
    return (
        <Routes>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-up/user-account" element={<UserAccount />} />
            <Route path="sign-up/:type" element={<TypeAccount />} />
        </Routes>
    )
}