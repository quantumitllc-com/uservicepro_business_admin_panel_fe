import { lazy } from "react"
import { Routes, Route } from "react-router-dom"

// auth
const SignIn = lazy(() => import("./auth/sign-in"))
const SignUp = lazy(() => import("./auth/sign-up"))
const UserAccount = lazy(() => import("./auth/sign-up/user-account"))
const TypeAccount = lazy(() => import("./auth/sign-up/type-account"))
// auth

// reg
const LayoutReg = lazy(() => import("./reg/layout"))
const Commercial = lazy(() => import("./reg/commercial"))
const User = lazy(() => import("./reg/user"))
const Business = lazy(() => import("./reg/business"))

const CommercialProfile = lazy(
	() => import("./reg/commercial/commercialProfile"),
)
const UserProfile = lazy(() => import("./reg/user/userProfile"))
const BusinessProfile = lazy(() => import("./reg/business/businessProfile"))

const VerifyByEmail = lazy(() => import("./reg/layout/verifyByEmail"))
const VerifyByPhone = lazy(() => import("./reg/layout/verifyByPhone"))

const Congratulations = lazy(() => import("./reg/layout/icons/congratulations"))

const CommercialBusiness = lazy(
	() => import("./reg/commercial/commercialBusiness"),
)
// reg

export function Routing() {
	return (
		<Routes>
			{/* auth */}
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="sign-up" element={<SignUp />} />
			<Route path="sign-up/user-account" element={<UserAccount />} />
			<Route path="sign-up/:type" element={<TypeAccount />} />
			{/* auth */}

			{/* reg */}
			<Route path="reg/" element={<LayoutReg />}>
				<Route path="commercial" element={<Commercial />} />
				<Route path="user" element={<User />} />
				<Route path="business" element={<Business />} />
				<Route
					path="commercial/profile"
					element={<CommercialProfile />}
				/>
				<Route path="user/profile" element={<UserProfile />} />
				<Route path="business/profile" element={<BusinessProfile />} />
				<Route path="commercial/email" element={<VerifyByEmail />} />
				<Route path="user/email" element={<VerifyByEmail />} />
				<Route path="business/email" element={<VerifyByEmail />} />
				<Route path="commercial/phone" element={<VerifyByPhone />} />
				<Route path="user/phone" element={<VerifyByPhone />} />
				<Route path="business/phone" element={<VerifyByPhone />} />

				<Route
					path="commercial/detail"
					element={<CommercialBusiness />}
				/>
			</Route>
			<Route path="congratulations" element={<Congratulations />} />
			{/* reg */}
		</Routes>
	)
}
