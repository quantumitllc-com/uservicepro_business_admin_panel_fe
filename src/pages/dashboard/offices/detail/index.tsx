import { minorScale, Pane, Switch } from "evergreen-ui"

import MyText from "components/text"
import { Spinner } from "components/spinner"
import MyHeading from "components/heading"
import { getBooleanSign } from "utils/getBooleanSign"
import Rating from "components/rating"
import { useDetail } from "./useDetail"
import Edit from "../edit"
import { useEdit } from "../edit/useEdit"

const OfficeDetail = () => {
	const { data, isLoading } = useDetail()
	const { handleChangeMainOffice, checked } = useEdit()

	console.log(data)

	return (
		<Pane>
			<MyHeading
				fontSize={25}
				fontWeight={600}
				marginBottom={minorScale(5)}
			>
				Office Details
			</MyHeading>
			<Pane display="flex" width="100%" gap={20}>
				<Pane
					padding={minorScale(7)}
					backgroundColor="var(--white)"
					border="var(--stroke-block) 1px solid"
					borderRadius={6}
					flex="1 1 70%"
				>
					{isLoading ? <Spinner /> : <Edit />}
				</Pane>
				<Pane
					padding={minorScale(7)}
					backgroundColor="var(--white)"
					border="var(--stroke-block) 1px solid"
					borderRadius={6}
					flex="1 1 30%"
					height="100%"
				>
					{isLoading ? (
						<Spinner />
					) : (
						<Pane display="flex" flexDirection="column" gap={16}>
							<Pane>
								<MyHeading>Additional Info</MyHeading>
							</Pane>
							<Pane display="flex" gap={24} alignItems="center">
								<Rating value={data.rating} />
								<Pane>
									<MyHeading>Main office</MyHeading>
									{!data.isMain ? (
										<Switch
											checked={checked}
											onChange={handleChangeMainOffice}
										/>
									) : (
										<MyText
											marginLeft={minorScale(3)}
											color="var(--grey)"
										>
											{getBooleanSign(data.isMain)}
										</MyText>
									)}
								</Pane>
							</Pane>

							<Pane gap={4} alignItems="center" display="flex">
								<MyText>{data.phone}</MyText>
								{getBooleanSign(data.isPhoneVerified)}
							</Pane>
						</Pane>
					)}
				</Pane>
			</Pane>
		</Pane>
	)
}

export default OfficeDetail
