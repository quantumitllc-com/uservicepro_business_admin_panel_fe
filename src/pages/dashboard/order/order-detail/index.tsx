import ButtonBack from "components/button-back"
import MyHeading from "components/heading"
import { Spinner } from "components/spinner"
import { Pane, Text } from "evergreen-ui"
import dayjs from "dayjs"
import { useDetail } from "./useDetail"
import { AssignedEmployess } from "../components/assigned-employess"

const OrderDetail = () => {
	const { data, orderId, isLoading } = useDetail()

	return (
		<Pane>
			<MyHeading fontSize={25} fontWeight={600} marginTop="30px">
				Order# {orderId}
			</MyHeading>
			<Pane paddingY={10}>
				<ButtonBack />
			</Pane>
			{isLoading ? (
				<Spinner />
			) : (
				<Pane
					width="100%"
					flexGrow={1}
					display="flex"
					padding="32px"
					backgroundColor="white"
				>
					<Pane width="65%">
						<MyHeading fontSize="20px">Order Details</MyHeading>
						<Pane
							height="42px"
							color="white"
							display="flex"
							marginY="20px"
							borderRadius="6px"
							background="#000000"
							alignItems="center"
							paddingX="20px"
							justifyContent="center"
							width="fit-content"
						>
							{data.rating ?? "-"} Rated score
						</Pane>
						<Pane
							gap={24}
							display="flex"
							maxWidth="500px"
							flexDirection="column"
						>
							<Pane
								paddingY="10px"
								paddingX="15px"
								borderRadius="6px"
								backgroundColor="#E9ECF1"
							>
								<MyHeading marginBottom="5px">
									Location
								</MyHeading>
								<Text>{data.place}</Text>
							</Pane>
							<Pane
								paddingX="15px"
								paddingY="10px"
								borderRadius="6px"
								backgroundColor="#E9ECF1"
							>
								<MyHeading marginBottom="5px">
									Customer name
								</MyHeading>
								<Text>-</Text>
							</Pane>
							<Pane
								paddingX="15px"
								paddingY="10px"
								borderRadius="6px"
								backgroundColor="#E9ECF1"
							>
								<MyHeading marginBottom="5px">
									Contact number
								</MyHeading>
								<Text>{data.contactNumber}</Text>
							</Pane>
						</Pane>
						<AssignedEmployess list={data.employeeIds} />
					</Pane>
					<Pane width="30%">
						<MyHeading>Time details</MyHeading>
						<Pane>
							{data.startedAt === null
								? "-"
								: dayjs(data.startedAt).format("MMM")}
						</Pane>
					</Pane>
				</Pane>
			)}
		</Pane>
	)
}

export default OrderDetail
