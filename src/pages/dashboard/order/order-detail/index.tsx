import ButtonBack from "components/button-back"
import MyHeading from "components/heading"
import { Spinner } from "components/spinner"
import { Pane, TextInput } from "evergreen-ui"
import dayjs from "dayjs"
import { useDetail } from "./useDetail"
import { AssignedEmployess } from "../components/assigned-employess"

const OrderDetail = () => {
	const { data, isLoading } = useDetail()

	return (
		<Pane>
			<Pane paddingY={10}>
				<ButtonBack />
			</Pane>
			{isLoading ? (
				<Spinner />
			) : (
				<Pane gap="20px" display="grid" gridTemplateColumns="1fr">
					<Pane
						width="100%"
						display="flex"
						padding="24px"
						borderRadius="12px"
						backgroundColor="white"
						border=" 1px solid rgba(0, 0, 0, 0.1)"
						boxShadow="0px 2px 50px rgba(0, 0, 0, 0.05)"
					>
						<Pane width="50%">
							<MyHeading fontSize="20px" marginBottom="22px">
								ORDER DETAILS
							</MyHeading>
							<Pane
								display="grid"
								gap="15px 60px"
								alignItems="center"
								gridTemplateColumns="max-content 1fr"
							>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Order ID
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{data.data?.orderId}
								</Pane>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Customer name
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{data.data?.customerName}
								</Pane>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Contact number
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{data.data?.contactNumber ?? "-"}
								</Pane>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Order type
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{data.data?.orderType}
								</Pane>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Order time
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{dayjs(data.data?.orderTime).format(
										"mm:hh A; D MMM, YYYY",
									) ?? "-"}
								</Pane>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Start date & time
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{dayjs(data.data?.startDateTime).format(
										"mm:hh A; D MMM, YYYY",
									) ?? "-"}
								</Pane>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									End date & time
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{dayjs(data.data?.endDateTime).format(
										"mm:hh A; D MMM, YYYY",
									) ?? "-"}
								</Pane>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Location ID
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{data.data?.officeId}
								</Pane>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Location name
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{data.data?.officeName}
								</Pane>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Payment Method
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{data.data?.paymentMethod}
								</Pane>
							</Pane>
						</Pane>
						<Pane width="50%">
							<MyHeading fontSize="20px" marginBottom="22px">
								ANSWERS
							</MyHeading>
							<Pane
								display="grid"
								gap="15px 60px"
								alignItems="center"
								gridTemplateColumns="max-content 1fr"
							>
								{data.data?.answers.map((v: any) => (
									<>
										<Pane
											fontSize="15px"
											fontWeight={400}
											lineHeight="16px"
											letterSpacing="0.35px"
											color="rgba(35, 39, 40, 0.5)"
										>
											{v.title}
										</Pane>
										<Pane
											color="#232728"
											fontSize="15px"
											fontWeight={600}
											lineHeight="21px"
											letterSpacing="0.35px"
										>
											{v.answer}
										</Pane>
									</>
								))}
							</Pane>
						</Pane>
					</Pane>
					<Pane
						width="100%"
						display="flex"
						padding="24px"
						borderRadius="12px"
						backgroundColor="white"
						border=" 1px solid rgba(0, 0, 0, 0.1)"
						boxShadow="0px 2px 50px rgba(0, 0, 0, 0.05)"
					>
						<AssignedEmployess list={data.data?.employeeInfos} />
					</Pane>
					<Pane
						width="100%"
						display="flex"
						padding="24px"
						borderRadius="12px"
						flexDirection="column"
						backgroundColor="white"
						border=" 1px solid rgba(0, 0, 0, 0.1)"
						boxShadow="0px 2px 50px rgba(0, 0, 0, 0.05)"
					>
						<MyHeading fontSize="20px" marginBottom="22px">
							ANSWERS
						</MyHeading>
						<TextInput
							name="text-input-name"
							value={data.data?.totalPrice}
							placeholder="Text input placeholder..."
						/>
					</Pane>
				</Pane>
			)}
		</Pane>
	)
}

export default OrderDetail
