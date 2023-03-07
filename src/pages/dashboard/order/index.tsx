import { Spinner } from "components/spinner"
import { Suspense } from "react"
import { Outlet } from "react-router"
import { Tabs } from "./components/tabs"

const Order = () => (
	<div>
		<Tabs />
		<Suspense fallback={<Spinner />}>
			<Outlet />
		</Suspense>
	</div>
)

export default Order
