import {
	Pane,
	PaneProps,
	SearchInput,
	ChatIcon,
	NotificationsIcon,
	Avatar,
	minorScale,
	Popover,
	Position,
	Menu,
	UserIcon,
	CogIcon,
	LogOutIcon,
} from "evergreen-ui"
import { Link, NavLink } from "react-router-dom"

import Logo from "components/logo"
import MyHeading from "components/heading"
import MyText from "components/text"
import styles from "./styles.module.scss"

const Header = (props: PaneProps) => (
	<Pane {...props} is="header">
		<Pane
			display="flex"
			alignItems="center"
			height="100%"
			borderRight="1px solid var(--dark-grey)"
			paddingLeft={minorScale(7)}
		>
			<Link to="/">
				<Logo />
			</Link>
		</Pane>
		<Pane
			justifyContent="space-between"
			paddingX={minorScale(7)}
			display="grid"
			gridTemplateColumns="5fr 1fr 1.5fr"
			alignItems="center"
		>
			<SearchInput
				height={minorScale(10)}
				width="100%"
				placeholder="What are you looking for?"
			/>
			<Pane justifyContent="center" gap={minorScale(7)} display="flex">
				<NavLink to="chat">
					{({ isActive }) => (
						<ChatIcon
							color={
								isActive ? "var(--dark-green)" : "var(--grey)"
							}
							size={20}
						/>
					)}
				</NavLink>
				<NotificationsIcon color="var(--grey)" size={20} />
			</Pane>
			<Popover
				position={Position.BOTTOM_LEFT}
				content={
					<Menu>
						<Menu.Group>
							<Menu.Item icon={UserIcon}>Edit profile</Menu.Item>
							<Menu.Item icon={CogIcon}>Settings</Menu.Item>
							<Menu.Item icon={LogOutIcon}>Logout</Menu.Item>
						</Menu.Group>
					</Menu>
				}
			>
				<Pane
					borderLeft="1px solid var(--dark-grey)"
					display="flex"
					alignItems="center"
					className={styles.profile}
				>
					<Avatar
						marginLeft={minorScale(5)}
						marginRight={minorScale(2)}
						src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
						size={50}
					/>
					<Pane>
						<MyHeading fontSize={15} fontWeight={400}>
							Alex Mendes
						</MyHeading>
						<MyText fontSize={12}>nelson-company@gmail.com</MyText>
					</Pane>
				</Pane>
				{/*</Button>*/}
			</Popover>
		</Pane>
	</Pane>
)

export default Header
