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
	// CogIcon,
	LogOutIcon
} from "evergreen-ui"
import { Link, NavLink } from "react-router-dom"
import { shallow } from "zustand/shallow"

import Logo from "components/logo"
import MyHeading from "components/heading"
import MyText from "components/text"
import { useLogOut } from "services/auth/log-out/useLogOut"
import { useUserStore } from "store/user"
import { ReactComponent as Ellipse } from "icons/ellipse.svg"
import styles from "./styles.module.scss"
import { useHeader } from "./useHeader"

const Header = (props: PaneProps) => {
	const { onSubmit } = useLogOut()
	const { totalCount } = useHeader()
	const { user } = useUserStore(
		(state) => ({
			user: state.user
		}),
		shallow
	)

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
							<Pane position="relative">
								<ChatIcon
									color={
										isActive
											? "var(--dark-green)"
											: "var(--grey)"
									}
									size={20}
								/>
								{totalCount > 0 &&
                                    <Ellipse className={styles.ellipse} />
								}
							</Pane>
						)}
					</NavLink>
					<NotificationsIcon color="var(--grey)" size={20} />
				</Pane>
				<Popover
					position={Position.BOTTOM_LEFT}
					content={
						<Menu>
							<Menu.Group>
								<Link to="profile">
									<Menu.Item icon={UserIcon}>
										Edit profile
									</Menu.Item>
								</Link>
								{/*<Menu.Item icon={CogIcon}>Settings</Menu.Item>*/}
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
							src={user.pictureUrl}
							size={50}
						/>
						<Pane>
							<MyHeading fontSize={15} fontWeight={400}>
								{user.userType}
							</MyHeading>
							<MyText whiteSpace="nowrap" fontSize={12}>
								{user.email}
							</MyText>
						</Pane>
					</Pane>
				</Popover>
			</Pane>
		</Pane>
	)
}

export default Header
