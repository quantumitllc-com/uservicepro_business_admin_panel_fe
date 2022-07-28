import { lazy } from "react"
import { Routes, Route } from "react-router-dom"

// auth
const SignIn = lazy(() => import("./auth/sign-in"))
const SignUp = lazy(() => import("./auth/sign-up"))
const UserAccount = lazy(() => import("./auth/sign-up/user-account"))
const TypeAccount = lazy(() => import("./auth/sign-up/type-account"))
// auth

// reg
const Commercial = lazy(() => import("./reg/commercial"))
const User = lazy(() => import("./reg/user"))
const Business = lazy(() => import("./reg/business"))
// reg

export function Routing() {
	return (
		<Routes>
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="sign-up" element={<SignUp />} />
			<Route path="sign-up/user-account" element={<UserAccount />} />
			<Route path="sign-up/:type" element={<TypeAccount />} />
			<Route path="reg/commercial" element={<Commercial />} />
			<Route path="reg/user" element={<User />} />
			<Route path="reg/business" element={<Business />} />
		</Routes>
	)
}
