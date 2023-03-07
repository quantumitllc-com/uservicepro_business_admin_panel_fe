import MyHeading from "components/heading"
import { Spinner } from "components/spinner"
import { Pane } from "evergreen-ui"
import { Suspense } from "react"
import { Outlet } from "react-router"
import { Tabs } from "./components/tabs"

const NewActivityMap = () => (
	<Pane flexGrow={1} height="100%" display="flex" flexDirection="column">
		<Pane
			display="grid"
			marginBottom="20px"
			gridTemplateColumns="1fr 1fr 1fr"
		>
			<MyHeading fontSize={24} fontWeight={600}>
				Activity map
			</MyHeading>
			{/* <Tabs /> */}
		</Pane>
		<Suspense fallback={<Spinner />}>
			<Outlet />
		</Suspense>
	</Pane>
)

export default NewActivityMap
