import { Pane } from "evergreen-ui"
import { Employeers } from "../components/employeers"
import { Orders } from "../components/orders"
import { Statistics } from "../components/statistics"
import { UsaMap } from "../components/use-map"

const Map = () => (
	<Pane
		gap="20px"
		flexGrow={1}
		width="100%"
		display="flex"
		flexDirection="column"
	>
		<Pane display="flex" gap="10px" maxHeight="400px" overflow="hidden">
			<Pane
				width="70%"
				padding="20px"
				background="white"
				borderRadius="10px"
				border="0.436153px solid #E9ECF1"
			>
				<UsaMap />
			</Pane>
			<Pane
				width="30%"
				padding="20px"
				background="white"
				borderRadius="10px"
				overflow="auto"
				border="0.436153px solid #E9ECF1"
			>
				<Orders />
			</Pane>
		</Pane>
		<Pane display="flex" gap="10px" flexGrow={1}>
			<Pane
				width="70%"
				padding="20px"
				background="white"
				borderRadius="10px"
				border="0.436153px solid #E9ECF1"
			>
				<Employeers />
			</Pane>
			<Pane
				width="30%"
				padding="20px"
				background="white"
				borderRadius="10px"
				border="0.436153px solid #E9ECF1"
			>
				<Statistics />
			</Pane>
		</Pane>
	</Pane>
)

export default Map
