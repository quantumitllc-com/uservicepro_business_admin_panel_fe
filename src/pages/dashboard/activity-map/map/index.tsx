import MyBadge from "components/badge"
import MyHeading from "components/heading"
import { Pane } from "evergreen-ui"
import { useNavigate } from "react-router-dom"
import { Employeers } from "../components/employeers"
import { UsaMap } from "../components/use-map"

const Map = () => {
	const navigate = useNavigate()
	const handleNavigate = () => navigate("/employee")

	return (
		<Pane
			gap="20px"
			flexGrow={1}
			width="100%"
			display="flex"
			flexDirection="column"
		>
			<Pane display="flex" gap="10px">
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
					border="0.436153px solid #E9ECF1"
				>
					<Pane
						display="flex"
						alignItems="center"
						marginBottom="10px"
						justifyContent="space-between"
					>
						<MyHeading fontSize={24} fontWeight={500}>
							Orders
						</MyHeading>
						<MyBadge
							height={30}
							display="flex"
							paddingLeft={15}
							cursor="pointer"
							paddingRight={15}
							borderRadius={20}
							width="fit-content"
							alignItems="center"
							justifyContent="center"
							onClick={handleNavigate}
							backgroundColor="var(--black)"
						>
							See more
						</MyBadge>
					</Pane>
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
					<MyHeading fontSize={24} fontWeight={500}>
						Statistics of sales
					</MyHeading>
					<MyBadge
						height={30}
						marginY="10px"
						display="flex"
						paddingLeft={15}
						cursor="pointer"
						paddingRight={15}
						borderRadius={20}
						alignItems="center"
						width="fit-content"
						justifyContent="center"
						onClick={handleNavigate}
						backgroundColor="var(--black)"
					>
						See more
					</MyBadge>
				</Pane>
			</Pane>
		</Pane>
	)
}

export default Map
