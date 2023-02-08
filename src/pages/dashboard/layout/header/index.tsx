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
import { useLogOut } from "services/auth/log-out/useLogOut"
import styles from "./styles.module.scss"

const Header = (props: PaneProps) => {
	const { onSubmit } = useLogOut()

	return (
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
				display="flex"
				alignItems="center"
				gap="40px"
			>
				<SearchInput
					width="100%"
					height={minorScale(10)}
					placeholder="What are you looking for?"
				/>
				<Pane display="flex" gap="40px">
					<NavLink to="chat">
						{({ isActive }) => (
							<ChatIcon
								color={
									isActive
										? "var(--dark-green)"
										: "var(--grey)"
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
								<Menu.Item icon={UserIcon}>
									Edit profile
								</Menu.Item>
								<Menu.Item icon={CogIcon}>Settings</Menu.Item>
								<Menu.Item onClick={onSubmit} icon={LogOutIcon}>
									Logout
								</Menu.Item>
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
							<MyText whiteSpace="nowrap" fontSize={12}>
								nelson-company@gmail.com
							</MyText>
						</Pane>
					</Pane>
				</Popover>
			</Pane>
		</Pane>
	)
}

export default Header
