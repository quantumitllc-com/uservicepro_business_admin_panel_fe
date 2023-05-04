/* eslint-disable no-nested-ternary */
import ButtonBack from "components/button-back"
import MyHeading from "components/heading"
import { Spinner } from "components/spinner"
import { Pane } from "evergreen-ui"
import { Input } from "components/input"
import MyButton from "components/button"
import { useDetail } from "./useDetail"
import { AssignedEmployess } from "../components/assigned-employess"
import { ReactComponent as IconMasterCard } from "../icons/master-card.svg"
import { ReactComponent as IconVisaCard } from "../icons/visa-card.svg"
import { ReactComponent as IconUnionPayCard } from "../icons/unionpay-card.svg"

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
	console.log(data)

	const cards = {
		visa: <IconVisaCard />,
		master: <IconMasterCard />,
		unionpay: <IconUnionPayCard />,
	}

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
								{data.data?.orderType !== "ASAP" && (
									<>
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
									</>
								)}
								{data.data?.startDateTime !== "-" ? (
									<>
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
									</>
								) : null}
								{data.data?.endDateTime !== "-" ? (
									<>
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
									</>
								) : null}

								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Office ID
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
									Office name
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
									{data?.data?.paymentCredentials &&
									data?.data?.paymentMethod === "CARD" ? (
										<Pane
											display="grid"
											gridTemplateColumns="200px"
										>
											<Pane
												gap="10px"
												display="flex"
												justifyContent="space-between"
											>
												{
													cards[
														data?.data
															?.paymentCredentials
															?.brand
													]
												}
												<Pane
													color="#232728"
													fontSize="14px"
													fontWeight={600}
													lineHeight="21px"
													letterSpacing="0.35px"
													display="flex"
													alignItems="center"
												>
													**** **** ****
													{
														data?.data
															?.paymentCredentials
															?.last4
													}
												</Pane>
											</Pane>
											<Pane
												display="flex"
												justifyContent="space-between"
											>
												<Pane
													fontSize="12px"
													fontWeight={400}
													lineHeight="16px"
													letterSpacing="0.35px"
													color="rgba(35, 39, 40, 0.5)"
												>
													Expire
												</Pane>

												<Pane
													fontSize="12px"
													fontWeight={400}
													lineHeight="16px"
													letterSpacing="0.35px"
													color="rgba(35, 39, 40, 0.5)"
												>
													{
														data?.data
															?.paymentCredentials
															?.exp_month
													}
													/
													{
														data?.data
															?.paymentCredentials
															?.exp_year
													}
												</Pane>
											</Pane>
										</Pane>
									) : null}
								</Pane>
								<Pane
									fontSize="15px"
									fontWeight={400}
									lineHeight="16px"
									letterSpacing="0.35px"
									color="rgba(35, 39, 40, 0.5)"
								>
									Paid
								</Pane>
								<Pane
									color="#232728"
									fontSize="15px"
									fontWeight={600}
									lineHeight="21px"
									letterSpacing="0.35px"
								>
									{data.data?.isPaid ? "Paid" : "Unpaid"}
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
							serviceId={data.data?.serviceId}
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
