import { lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

// dashboard
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
import PaymentBank from "./dashboard/payment/paymentBank"
import SelectPayment from "./dashboard/payment/selectPayment"
// dashboard

// auth
import SignIn from "./auth/sign-in"
import SignUp from "./auth/sign-up"
import UserAccount from "./auth/sign-up/user-account"
import TypeAccount from "./auth/sign-up/type-account"
import Forget from "./auth/forget"
// auth

// pre-dashboard
import LayoutReg from "./pre-dashboard/layout"
import Business from "./pre-dashboard/business"
import BusinessProfile from "./pre-dashboard/business/detail/businessProfile"
import VerifyByEmail from "./pre-dashboard/business/verify/email/email"
import VerifyByPhone from "./pre-dashboard/business/verify/phone/phone"
// pre-dashboard

import { getTokens } from "../utils/getTokens"

const Congratulations = lazy(() => import("./pre-dashboard/congratulations"))

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
			<Route path="forget" element={<Forget />} />
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
