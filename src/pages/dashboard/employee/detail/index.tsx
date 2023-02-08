import MyHeading from "components/heading"
import MyText from "components/text"

import {
	AddIcon,
	Avatar,
	EditIcon,
	Pane,
	Spinner,
	minorScale,
} from "evergreen-ui"
import MyBadge from "components/badge"
import MyButton from "components/button"
import { usePage } from "./usePage"
import { ReactComponent as Folders } from "../icons/folders.svg"
import { ReactComponent as Like } from "../icons/like.svg"
import { ReactComponent as Time } from "../icons/time.svg"
import { Edit } from "../components/edit"
import { StatusSelect } from "../components/status-select"

const EmployeeDetail = () => {
	const { data, isLoading, employeeId } = usePage()
	return (
		<Pane>
			<MyHeading
				fontSize={25}
				fontWeight={600}
				marginBottom={minorScale(5)}
			>
				Profile
			</MyHeading>
			{isLoading ? (
				<Pane
					display="flex"
					minHeight={150}
					alignItems="center"
					justifyContent="center"
				>
					<Spinner />
				</Pane>
			) : (
				<Pane display="flex" gap={20}>
					<Pane display="flex" gap={20} flexDirection="column">
						<Pane
							gap="30px"
							display="flex"
							width="fit-content"
							borderRadius="10px"
							whiteSpace="nowrap"
							flexDirection="column"
							padding={minorScale(7)}
							border="1px solid #E9ECF1"
							backgroundColor="var(--white)"
						>
							<Pane>
								<MyHeading fontSize={24}>
									Employee Details
									<MyText marginLeft={5}>
										({employeeId})
									</MyText>
								</MyHeading>
							</Pane>
							<Pane
								gap={15}
								display="flex"
								paddingBottom={20}
								borderBottom="1px solid var(--stroke-block)"
							>
								<Avatar marginRight={20} size={80} />
								<Pane gap={10} display="flex">
									<Pane
										gap={8}
										display="flex"
										flexDirection="column"
									>
										<MyHeading>Employee</MyHeading>
										<MyText>
											{`${data.firstName}  ${data.lastName}`}
										</MyText>
										<MyText>{data.phone}</MyText>
										<MyText>{data.email}</MyText>
									</Pane>
									<Pane
										gap={8}
										display="flex"
										flexDirection="column"
									>
										<MyHeading>Status</MyHeading>
										<StatusSelect />
									</Pane>
								</Pane>
							</Pane>
							<Pane>
								<MyHeading marginBottom={20} fontSize={24}>
									Work Experience
								</MyHeading>
								<Pane display="flex" gap={20}>
									<Pane
										display="flex"
										alignItems="center"
										gap={10}
									>
										<Folders />
										<Pane
											display="flex"
											flexDirection="column"
										>
											<MyHeading>6 years</MyHeading>
											<MyText>since 2016</MyText>
										</Pane>
									</Pane>
									<Pane
										display="flex"
										alignItems="center"
										gap={10}
									>
										<Like />
										<Pane
											display="flex"
											flexDirection="column"
										>
											<MyHeading>4.33</MyHeading>
											<MyText>of 345 reviews</MyText>
										</Pane>
									</Pane>
									<Pane
										gap={10}
										display="flex"
										alignItems="center"
									>
										<Time />
										<Pane
											display="flex"
											flexDirection="column"
										>
											<MyHeading>32K</MyHeading>
											<MyText>work hours</MyText>
										</Pane>
									</Pane>
								</Pane>
							</Pane>
						</Pane>
						<Pane
							gap="30px"
							display="flex"
							borderRadius="10px"
							flexDirection="column"
							padding={minorScale(7)}
							border="1px solid #E9ECF1"
							backgroundColor="var(--white)"
						>
							<Pane>
								<MyHeading fontSize={24}>
									Additional Info
								</MyHeading>
							</Pane>
							<Edit
								ssn={data?.ssn}
								officeId={data.officeId}
								attachedFileUrl={data.attachedFileUrl}
							/>
						</Pane>
					</Pane>
					<Pane display="flex" gap={20} flexDirection="column">
						<Pane
							gap="30px"
							display="flex"
							borderRadius="10px"
							flexDirection="column"
							padding={minorScale(7)}
							border="1px solid #E9ECF1"
							backgroundColor="var(--white)"
						>
							<Pane>
								<MyHeading fontSize={24}>
									Cleaning <EditIcon />
								</MyHeading>
							</Pane>
							<Pane>
								<Pane
									marginBottom={20}
									display="flex"
									gap={15}
									flexWrap="wrap"
								>
									<MyBadge backgroundColor="#A7B4D3">
										House Cleaning
									</MyBadge>
									<MyBadge backgroundColor="#A7B4D3">
										Car Cleaning
									</MyBadge>
									<MyBadge backgroundColor="#A7B4D3">
										Pool Cleaning
									</MyBadge>
									<MyBadge backgroundColor="#A7B4D3">
										Commercial Cleaning
									</MyBadge>
									<MyBadge backgroundColor="#A7B4D3">
										Laundry and Dry Cleaning
									</MyBadge>
								</Pane>
								<MyButton
									iconBefore={AddIcon}
									small="true"
									appearance="primary"
									backgroundColor="var(--green)"
								>
									Add service
								</MyButton>
							</Pane>
						</Pane>
					</Pane>
				</Pane>
			)}
		</Pane>
	)
}

export default EmployeeDetail
