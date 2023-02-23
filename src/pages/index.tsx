import { lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import { getTokens } from "../utils/getTokens"

// dashboard
const ActivityMap = lazy(() => import("./dashboard/activity-map"))
const Schedules = lazy(() => import("./dashboard/schedules"))

// offices
const Offices = lazy(() => import("./dashboard/offices"))
const OneOffice = lazy(() => import("./dashboard/offices/detail"))
// offices

// profile
const Profile = lazy(() => import("./dashboard/profile"))
// profile

//chat
const Chat = lazy(() => import("./dashboard/chat"))
const Message = lazy(() => import("./dashboard/chat/components/message"))

//chat

const Payment = lazy(() => import("./dashboard/payment"))
const Ads = lazy(() => import("./dashboard/ads"))
const Accounting = lazy(() => import("./dashboard/accounting"))
const PaymentBank = lazy(() => import("./dashboard/payment/paymentBank"))
const SelectPayment = lazy(() => import("./dashboard/payment/paymentBank"))

const Layout = lazy(() => import("./dashboard/layout"))
const Dashboard = lazy(() => import("./dashboard"))
const Employee = lazy(() => import("./dashboard/employee"))
const EmployeeDetail = lazy(() => import("./dashboard/employee/detail"))
const Services = lazy(() => import("./dashboard/services"))
const AddServices = lazy(() => import("./dashboard/services/add"))
const Statistics = lazy(() => import("./dashboard/statistics"))

// dashboard

// auth
const SignIn = lazy(() => import("./auth/sign-in"))
const SignUp = lazy(() => import("./auth/sign-up"))
const Register = lazy(() => import("./auth/sign-up/register"))
const Password = lazy(() => import("./auth/password"))
const PasswordEmail = lazy(() => import("./auth/password/email"))
const PasswordPhone = lazy(() => import("./auth/password/phone"))
const PasswordReset = lazy(() => import("./auth/password/reset"))
// auth

// pre-dashboard
const LayoutReg = lazy(() => import("./pre-dashboard/layout"))
const Business = lazy(() => import("./pre-dashboard/business"))
const BusinessProfile = lazy(
	() => import("./pre-dashboard/business/profile/businessProfile"),
)
const VerifyByEmail = lazy(
	() => import("./pre-dashboard/business/verify/email/email"),
)
const VerifyByPhone = lazy(
	() => import("./pre-dashboard/business/verify/phone/phone"),
)
// pre-dashboard

const Congratulations = lazy(
	() => import("./pre-dashboard/congratulations/congratulations"),
)

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
			<Route path="sign-up/business" element={<Register />} />
			<Route path="password" element={<Password />} />
			<Route path="password/email" element={<PasswordEmail />} />
			<Route path="password/phone" element={<PasswordPhone />} />
			<Route
				path="password/reset/:resetToken"
				element={<PasswordReset />}
			/>
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
				<Route
					path="employee/:employeeId"
					element={<EmployeeDetail />}
				/>
				<Route path="services" element={<Services />} />
				<Route path="services/add" element={<AddServices />} />
				<Route path="statistics" element={<Statistics />} />
				<Route path="activity-map" element={<ActivityMap />} />
				<Route path="schedules" element={<Schedules />} />

				{/*offices*/}
				<Route path="offices" element={<Offices />} />
				<Route path="offices/:id" element={<OneOffice />} />
				{/*offices*/}

				{/*// profile*/}
				<Route path="profile" element={<Profile />} />
				{/*// profile*/}

				{/*// chat*/}
				<Route path="chat" element={<Chat />}>
					<Route path=":id" element={<Message />} />
				</Route>
				{/*chat*/}

				<Route path="ads" element={<Ads />} />
				<Route path="accounting" element={<Accounting />} />
				<Route path="payment" element={<Payment />} />
				<Route path="payment/bank" element={<PaymentBank />} />
				<Route path="payment/select" element={<SelectPayment />} />
			</Route>
			{/*dashboard*/}
		</Routes>
	)
}
