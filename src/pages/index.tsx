import { lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

// import { Breadcrumbs, textObj } from "./pre-dashboard/business/businessDetail"

import Layout from "./dashboard/layout"
import Dashboard from "./dashboard"
import Employee from "./dashboard/employee"
import Services from "./dashboard/services"
import AddServices from "./dashboard/services/add"
import Statistics from "./dashboard/statistics"
import ActivityMap from "./dashboard/activity-map"
import Schedules from "./dashboard/schedules"
import Location from "./dashboard/location"
import Payment from "./dashboard/payment"
import Ads from "./dashboard/ads"
import Accounting from "./dashboard/accounting"
import Chat from "./dashboard/chat"

// payment
import PaymentBank from "./dashboard/payment/paymentBank"
import SelectPayment from "./dashboard/payment/selectPayment"
import { getTokens } from "../utils/getTokens"
// payment

// auth
const SignIn = lazy(() => import("./auth/sign-in"))
const SignUp = lazy(() => import("./auth/sign-up"))
const UserAccount = lazy(() => import("./auth/sign-up/user-account"))
const TypeAccount = lazy(() => import("./auth/sign-up/type-account"))
// auth

// pre-dashboard
const LayoutReg = lazy(() => import("./pre-dashboard/layout"))

// const Commercial = lazy(() => import("./pre-dashboard/commercial"))
// const CommercialProfile = lazy(
// 	() => import("./pre-dashboard/commercial/commercialProfile"),
// )
// const CommercialDetail = lazy(
// 	() => import("./pre-dashboard/commercial/commercialBusiness"),
// )
//
// const User = lazy(() => import("./pre-dashboard/user"))
// const UserProfile = lazy(() => import("./pre-dashboard/user/userProfile"))

const Business = lazy(() => import("./pre-dashboard/business"))
const BusinessProfile = lazy(
	() => import("./pre-dashboard/business/detail/businessProfile"),
)

// const BusinessPayment = lazy(
// 	() => import("./pre-dashboard/business/businessPayment"),
// )
// const BusinessDetail = lazy(
// 	() => import("./pre-dashboard/business/businessDetail"),
// )
// const BusinessCategory = lazy(
// 	() => import("./pre-dashboard/business/businessCategory"),
// )
// const BusinessSubCategory = lazy(
// 	() => import("./pre-dashboard/business/businessSubCategory"),
// )

const VerifyByEmail = lazy(
	() => import("./pre-dashboard/business/verify/email/email"),
)
const VerifyByPhone = lazy(
	() => import("./pre-dashboard/business/verify/phone/phone"),
)
const Congratulations = lazy(() => import("./pre-dashboard/congratulations"))
// pre-dashboard

function PrivateRoute({ children }: any) {
	const tokens = getTokens()

	return tokens ? children : <Navigate to="/sign-in" />
}

export function Routing() {
	return (
		<Routes>
			{/*auth*/}
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="sign-up" element={<SignUp />} />
			<Route path="sign-up/user-account" element={<UserAccount />} />
			<Route path="sign-up/:type" element={<TypeAccount />} />
			{/*auth*/}

			{/*pre-dashboard*/}
			<Route
				path="pre-dashboard/"
				element={
					<PrivateRoute>
						<LayoutReg />
					</PrivateRoute>
				}
			>
				{/*business account*/}
				<Route path="business" element={<Business />} />
				<Route path="business/profile" element={<BusinessProfile />} />
				<Route path="business/email" element={<VerifyByEmail />} />
				<Route path="business/phone" element={<VerifyByPhone />} />

				{/*<Route path="business/payment" element={<BusinessPayment />} />*/}

				{/*<Route*/}
				{/*	path="business/detail"*/}
				{/*	element={*/}
				{/*		<BusinessDetail*/}
				{/*			text={textObj}*/}
				{/*			breadcrumbs={<Breadcrumbs />}*/}
				{/*		/>*/}
				{/*	}*/}
				{/*/>*/}
				{/*<Route*/}
				{/*	path="business/detail/:category"*/}
				{/*	element={<BusinessCategory />}*/}
				{/*/>*/}
				{/*<Route*/}
				{/*	path="business/detail/:category/:subCategory"*/}
				{/*	element={<BusinessSubCategory />}*/}
				{/*/>*/}

				{/*<Route path="commercial" element={<Commercial />} />*/}
				{/*<Route path="commercial/email" element={<Email />} />*/}
				{/*<Route path="commercial/phone" element={<Phone />} />*/}
				{/*<Route*/}
				{/*	path="commercial/profile"*/}
				{/*	element={<CommercialProfile />}*/}
				{/*/>*/}
				{/*<Route*/}
				{/*	path="commercial/detail"*/}
				{/*	element={<CommercialDetail />}*/}
				{/*/>*/}

				{/*<Route path="user" element={<User />} />*/}
				{/*<Route path="user/profile" element={<UserProfile />} />*/}
				{/*<Route path="user/email" element={<Email />} />*/}
				{/*<Route path="user/phone" element={<Phone />} />*/}
			</Route>
			<Route path="congratulations" element={<Congratulations />} />
			{/*pre-dashboard*/}

			{/*dashboard*/}
			<Route
				path="/"
				element={
					<PrivateRoute>
						<Layout />
					</PrivateRoute>
				}
			>
				<Route path="/" element={<Dashboard />} />
				<Route path="employee" element={<Employee />} />
				<Route path="services" element={<Services />} />
				<Route path="services/add" element={<AddServices />} />
				<Route path="statistics" element={<Statistics />} />
				<Route path="activity-map" element={<ActivityMap />} />
				<Route path="schedules" element={<Schedules />} />
				<Route path="location" element={<Location />} />
				<Route path="ads" element={<Ads />} />
				<Route path="accounting" element={<Accounting />} />
				<Route path="chat" element={<Chat />} />

				<Route path="payment" element={<Payment />} />
				<Route path="payment/bank" element={<PaymentBank />} />
				<Route path="payment/select" element={<SelectPayment />} />
			</Route>
			{/*dashboard*/}
		</Routes>
	)
}
