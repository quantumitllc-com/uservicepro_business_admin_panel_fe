import { minorScale, Pane } from "evergreen-ui"

import Rating from "components/rating"
import MyHeading from "components/heading"
import MyText from "components/text"
import { Spinner } from "components/spinner"
import { getBooleanSign } from "utils/getBooleanSign"
import { useProfile } from "./useProfile"
import Edit from "./edit"
import Photo from "./components/photo"

const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<Pane>
			<MyHeading
				fontSize={25}
				fontWeight={600}
				marginBottom={minorScale(5)}
			>
				Profile
			</MyHeading>
			<Pane display="flex" width="100%" gap={20}>
				<Pane
					padding={minorScale(7)}
					backgroundColor="var(--white)"
					border="var(--stroke-block) 1px solid"
					borderRadius={6}
					flex="1 1 40%"
				>
					{isLoading ? (
						<Spinner />
					) : (
						<Pane>
							<Pane
								paddingBottom={20}
								borderBottom="1px solid var(--stroke-block)"
							>
								<Pane marginBottom={minorScale(4)}>
									<MyHeading>Company Details</MyHeading>
								</Pane>
								<Pane display="flex">
									<Photo data={data} />
									<Pane
										display="flex"
										gap={8}
										flexDirection="column"
									>
										<MyHeading>Company</MyHeading>
										<Pane
											gap={4}
											alignItems="center"
											display="flex"
										>
											<MyText>{data.email}</MyText>
											{getBooleanSign(
												data.isEmailVerified,
											)}
										</Pane>
										<Pane
											gap={4}
											alignItems="center"
											display="flex"
										>
											<MyText>{data.mainPhone}</MyText>
											{getBooleanSign(
												data.isMainPhoneNumberVerified,
											)}
										</Pane>
									</Pane>
								</Pane>
							</Pane>
							<Pane gap={24} display="flex" marginTop={20}>
								<Pane
									gap={4}
									flexDirection="column"
									display="flex"
								>
									<Rating value={data.rating} />
								</Pane>
								<Pane
									flexDirection="column"
									gap={4}
									display="flex"
								>
									<MyHeading>Payment options</MyHeading>
									<Pane>
										<Pane gap={4} display="flex">
											{data.paymentOptions?.map(
												(item: string) => (
													<MyText key={item}>
														{item}
													</MyText>
												),
											)}
										</Pane>
									</Pane>
								</Pane>
							</Pane>
						</Pane>
					)}
				</Pane>
				<Pane
					padding={minorScale(7)}
					backgroundColor="var(--white)"
					border="var(--stroke-block) 1px solid"
					borderRadius={6}
					flex="1 1 60%"
				>
					{isLoading ? (
						<Spinner />
					) : (
						<Pane>
							<Pane>
								<Pane marginBottom={minorScale(4)}>
									<MyHeading>Additional info</MyHeading>
								</Pane>
								<Edit />
							</Pane>
						</Pane>
					)}
				</Pane>
			</Pane>
		</Pane>
	)
}
export default Profile
