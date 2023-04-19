/* eslint-disable no-nested-ternary */
import ButtonBack from "components/button-back"
import MyHeading from "components/heading"
import { Spinner } from "components/spinner"
import { Pane } from "evergreen-ui"
import { Input } from "components/input"
import MyButton from "components/button"
import { useDetail } from "./useDetail"
import { AssignedEmployess } from "../components/assigned-employess"

const OrderDetail = () => {
	const {
		data,
		form,
		value,
		orderId,
		setTrue,
		onSubmit,
		setFalse,
		isLoading,
		totalPrice,
	} = useDetail()
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
									{data.data?.orderTime}
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
									{data.data?.startDateTime}
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
									{data.data?.endDateTime}
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
									-
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
						<AssignedEmployess
							officeId={data.data?.officeId}
							list={data.data?.employeeInfos}
						/>
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
						<MyHeading fontSize="20px">PRICE</MyHeading>
						<Pane display="flex" alignItems="center">
							<Input
								type="number"
								disabled={!value}
								name="totalPrice"
								control={form.control}
								placeholder="Enter price"
							/>
							<Pane
								gap="10px"
								display="flex"
								marginLeft="15px"
								marginTop="-17px"
							>
								{value ? (
									<>
										<MyButton
											appearance="primary"
											type="submit"
											onClick={form.handleSubmit(
												onSubmit,
											)}
										>
											Save
										</MyButton>
										<MyButton onClick={setFalse}>
											No
										</MyButton>
									</>
								) : (
									<MyButton type="button" onClick={setTrue}>
										Edit
									</MyButton>
								)}
							</Pane>
						</Pane>
					</Pane>
				</Pane>
			)}
		</Pane>
	)
}

export default OrderDetail
