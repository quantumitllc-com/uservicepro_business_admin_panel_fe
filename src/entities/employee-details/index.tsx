import {
	AddIcon,
	Avatar,
	Dialog,
	EditIcon,
	Pane,
	TrashIcon,
	Switch,
	DownloadIcon,
} from "evergreen-ui"
import { FC } from "react"

import MyHeading from "shared/ui/heading"
import MyButton from "shared/ui/button"
import { MyInputField } from "shared/ui/input"
import MyLabel from "shared/ui/label"
import MyText from "shared/ui/text"
import MyBadge from "shared/ui/badge"
import { ReactComponent as Folders } from "./folders.svg"
import { ReactComponent as Like } from "./like.svg"
import { ReactComponent as Time } from "./time.svg"

interface EmployeeDetailsProps {
	isShown: boolean
	setIsShown(b: boolean): void
}

const EmployeeDetails: FC<EmployeeDetailsProps> = ({ isShown, setIsShown }) => (
	<Dialog
		width="90%"
		isShown={isShown}
		onCloseComplete={() => setIsShown(false)}
		hasFooter={false}
		hasHeader={false}
		minHeightContent="100%"
	>
		<Pane
			marginY={52}
			gap={20}
			display="grid"
			gridAutoColumns="1fr"
			gridTemplateColumns="1fr 1fr"
			gridTemplateRows="1fr"
		>
			<Pane
				paddingX={30}
				paddingY={20}
				borderRadius={10}
				border="1px solid var(--stroke-block)"
			>
				<Pane gap={15} display="flex" flexDirection="column">
					<Pane
						alignItems="center"
						display="flex"
						justifyContent="space-between"
					>
						<MyHeading fontSize={24}>Employee details</MyHeading>
						<MyButton small="true" iconBefore={EditIcon}>
							Edit
						</MyButton>
					</Pane>
					<Pane
						display="flex"
						gap={15}
						justifyContent="space-between"
					>
						<MyInputField
							type="text"
							label={<MyLabel>Given name</MyLabel>}
							placeholder="Clark"
						/>
						<MyInputField
							type="text"
							label={<MyLabel>Second name</MyLabel>}
							placeholder="Nelson"
						/>
					</Pane>
					<Pane
						display="flex"
						gap={15}
						justifyContent="space-between"
					>
						<MyInputField
							type="date"
							label={<MyLabel>Date of birth</MyLabel>}
						/>
						<MyInputField
							type="number"
							label={<MyLabel>Phone number</MyLabel>}
							placeholder="215 555 55 55"
						/>
					</Pane>
				</Pane>
			</Pane>
			<Pane
				paddingX={30}
				paddingY={20}
				borderRadius={10}
				border="1px solid var(--stroke-block)"
			>
				<Pane
					alignItems="center"
					display="flex"
					justifyContent="space-between"
					marginBottom={20}
				>
					<MyHeading fontSize={24}>Employee details</MyHeading>
					<MyButton
						appearance="danger"
						border="none"
						small="true"
						iconBefore={TrashIcon}
					>
						Delete
					</MyButton>
					<MyButton small="true" iconBefore={EditIcon}>
						Edit
					</MyButton>
				</Pane>
				<Pane
					display="flex"
					alignItems="center"
					borderBottom="1px solid var(--stroke-block)"
					paddingBottom={20}
				>
					<Avatar
						marginRight={20}
						src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
						size={80}
					/>
					<Pane
						marginRight={50}
						display="flex"
						gap={10}
						flexDirection="column"
					>
						<MyHeading>App ID</MyHeading>
						<MyText>112234GZ</MyText>
					</Pane>
					<Pane display="flex" gap={10} flexDirection="column">
						<MyHeading>Status</MyHeading>
						<MyBadge backgroundColor="var(--dark-green)">
							Active
						</MyBadge>
					</Pane>
				</Pane>
				<Pane paddingTop={10}>
					<MyHeading marginBottom={20} fontSize={24}>
						Work Experience
					</MyHeading>
					<Pane display="flex" gap={20}>
						<Pane display="flex" alignItems="center" gap={10}>
							<Folders />
							<Pane display="flex" flexDirection="column">
								<MyHeading>6 years</MyHeading>
								<MyText>since 2016</MyText>
							</Pane>
						</Pane>
						<Pane display="flex" alignItems="center" gap={10}>
							<Like />
							<Pane display="flex" flexDirection="column">
								<MyHeading>4.33</MyHeading>
								<MyText>of 345 reviews</MyText>
							</Pane>
						</Pane>
						<Pane display="flex" alignItems="center" gap={10}>
							<Time />
							<Pane display="flex" flexDirection="column">
								<MyHeading>32K</MyHeading>
								<MyText>work hours</MyText>
							</Pane>
						</Pane>
					</Pane>
				</Pane>
			</Pane>
			<Pane
				paddingX={30}
				paddingY={20}
				borderRadius={10}
				border="1px solid var(--stroke-block)"
			>
				<Pane gap={15} display="flex" flexDirection="column">
					<Pane
						alignItems="center"
						display="flex"
						justifyContent="space-between"
					>
						<MyHeading fontSize={24}>Status</MyHeading>
						<MyButton small="true" iconBefore={EditIcon}>
							Edit
						</MyButton>
					</Pane>
					<Pane
						display="flex"
						gap={15}
						justifyContent="space-between"
					>
						<MyInputField
							type="text"
							label={<MyLabel>Email address</MyLabel>}
							placeholder="Clark@gamil.com"
						/>
						<MyInputField
							type="text"
							label={<MyLabel>SNN</MyLabel>}
							placeholder="SNN"
						/>
					</Pane>
				</Pane>
			</Pane>
			<Pane
				paddingX={30}
				paddingY={20}
				borderRadius={10}
				border="1px solid var(--stroke-block)"
			>
				<MyHeading marginBottom={20}>Category</MyHeading>
				<Pane marginBottom={20} display="flex" gap={15} flexWrap="wrap">
					<MyBadge backgroundColor="#A7B4D3">House Cleaning</MyBadge>
					<MyBadge backgroundColor="#A7B4D3">Car Cleaning</MyBadge>
					<MyBadge backgroundColor="#A7B4D3">Pool Cleaning</MyBadge>
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
					Add category
				</MyButton>
			</Pane>
			<Pane
				paddingX={30}
				paddingY={20}
				borderRadius={10}
				border="1px solid var(--stroke-block)"
			>
				<MyHeading marginBottom={30} fontSize={24}>
					Employee Application
				</MyHeading>
				<MyHeading marginBottom={20}>Employee status</MyHeading>
				<Pane
					borderRadius={8}
					boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1)"
					border="1px solid var(--stroke-block)"
					display="flex"
					width="75%"
					marginBottom={20}
				>
					<Pane
						paddingY={10}
						paddingX={20}
						display="flex"
						alignItems="center"
						gap={20}
						borderRight="1px solid var(--stroke-block)"
					>
						<MyHeading>Pause</MyHeading>
						<Switch checked />
					</Pane>
					<Pane
						paddingY={10}
						paddingX={20}
						display="flex"
						alignItems="center"
						gap={20}
						borderRight="1px solid var(--stroke-block)"
					>
						<MyHeading>
							<Pane
								paddingY={10}
								paddingX={20}
								display="flex"
								alignItems="center"
								gap={20}
							>
								<MyHeading>Active</MyHeading>
								<Switch />
							</Pane>
						</MyHeading>
					</Pane>
					<Pane
						paddingY={10}
						paddingX={20}
						display="flex"
						alignItems="center"
						gap={20}
					>
						<MyHeading>Ban</MyHeading>
						<Switch />
					</Pane>
				</Pane>
				<MyHeading marginBottom={20}>Days</MyHeading>
				<Pane display="flex" gap={15} marginBottom={30}>
					<MyBadge backgroundColor="var(--grey)">1 day</MyBadge>
					<MyBadge backgroundColor="var(--dark-green)">
						7 days
					</MyBadge>
					<MyBadge backgroundColor="var(--grey)">2 weeks</MyBadge>
					<MyBadge backgroundColor="var(--grey)">1 month</MyBadge>
					<MyBadge backgroundColor="var(--grey)">1 year</MyBadge>
				</Pane>
				<Pane display="flex" gap={20}>
					<MyButton small="true" appearance="primary">
						Apply
					</MyButton>
					<MyButton
						iconBefore={DownloadIcon}
						small="true"
						appearance="outlined"
					>
						Download PDF file
					</MyButton>
				</Pane>
			</Pane>
		</Pane>
	</Dialog>
)

export default EmployeeDetails
