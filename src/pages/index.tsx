import { lazy } from "react"
import { Routes, Route } from "react-router-dom"

import { Breadcrumbs, textObj } from "./reg/business/businessDetail"
import Layout from "./dashboard/layout"
import Dashboard from "./dashboard"
import Employee from "./dashboard/employee"
import Services from "./dashboard/services"
import Statistics from "./dashboard/statistics"
import ActivityMap from "./dashboard/activity-map"
import Schedules from "./dashboard/schedules"
import Reviews from "./dashboard/reviews"
import Payment from "./dashboard/payment"
import Ads from "./dashboard/ads"
import Accounting from "./dashboard/accounting"

// auth
const SignIn = lazy(() => import("./auth/sign-in"))
const SignUp = lazy(() => import("./auth/sign-up"))
const UserAccount = lazy(() => import("./auth/sign-up/user-account"))
const TypeAccount = lazy(() => import("./auth/sign-up/type-account"))
// auth

// reg
const LayoutReg = lazy(() => import("./reg/layout"))

const Commercial = lazy(() => import("./reg/commercial"))
const CommercialProfile = lazy(
	() => import("./reg/commercial/commercialProfile"),
)
const CommercialDetail = lazy(
	() => import("./reg/commercial/commercialBusiness"),
)

const User = lazy(() => import("./reg/user"))
const UserProfile = lazy(() => import("./reg/user/userProfile"))

const Business = lazy(() => import("./reg/business"))
const BusinessProfile = lazy(() => import("./reg/business/businessProfile"))
const BusinessPayment = lazy(() => import("./reg/business/businessPayment"))
const BusinessDetail = lazy(() => import("./reg/business/businessDetail"))
const BusinessCategory = lazy(() => import("./reg/business/businessCategory"))
const BusinessSubCategory = lazy(
	() => import("./reg/business/businessSubCategory"),
)

const VerifyByEmail = lazy(() => import("./reg/layout/verifyByEmail"))
const VerifyByPhone = lazy(() => import("./reg/layout/verifyByPhone"))
const Congratulations = lazy(() => import("./reg/layout/icons/congratulations"))

// reg

export function Routing() {
	return (
		<Routes>
			{/*auth*/}
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="sign-up" element={<SignUp />} />
			<Route path="sign-up/user-account" element={<UserAccount />} />
			<Route path="sign-up/:type" element={<TypeAccount />} />
			{/*auth*/}

			{/*reg*/}
			<Route path="reg/" element={<LayoutReg />}>
				<Route path="commercial" element={<Commercial />} />
				<Route path="commercial/email" element={<VerifyByEmail />} />
				<Route path="commercial/phone" element={<VerifyByPhone />} />
				<Route
					path="commercial/profile"
					element={<CommercialProfile />}
				/>
				<Route
					path="commercial/detail"
					element={<CommercialDetail />}
				/>

				<Route path="user" element={<User />} />
				<Route path="user/profile" element={<UserProfile />} />
				<Route path="user/email" element={<VerifyByEmail />} />
				<Route path="user/phone" element={<VerifyByPhone />} />

				<Route path="business" element={<Business />} />
				<Route path="business/profile" element={<BusinessProfile />} />
				<Route path="business/email" element={<VerifyByEmail />} />
				<Route path="business/phone" element={<VerifyByPhone />} />
				<Route path="business/payment" element={<BusinessPayment />} />
				<Route
					path="business/detail"
					element={
						<BusinessDetail
							text={textObj}
							breadcrumbs={<Breadcrumbs />}
						/>
					}
				/>
				<Route
					path="business/detail/:category"
					element={<BusinessCategory />}
				/>
				<Route
					path="business/detail/:category/:subCategory"
					element={<BusinessSubCategory />}
				/>
			</Route>
			<Route path="congratulations" element={<Congratulations />} />
			{/*reg*/}

			{/*dashboard*/}
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Dashboard />} />
				<Route path="employee" element={<Employee />} />
				<Route path="services" element={<Services />} />
				<Route path="statistics" element={<Statistics />} />
				<Route path="activity-map" element={<ActivityMap />} />
				<Route path="schedules" element={<Schedules />} />
				<Route path="reviews" element={<Reviews />} />
				<Route path="payment" element={<Payment />} />
				<Route path="ads" element={<Ads />} />
				<Route path="accounting" element={<Accounting />} />
			</Route>
			{/*dashboard*/}
		</Routes>
	)
}
