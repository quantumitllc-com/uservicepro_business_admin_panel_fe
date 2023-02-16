import { Avatar, CameraIcon, Pane } from "evergreen-ui"

const Photo = () => (
	<Pane position="relative">
		<Avatar
			// src={data.pictureUrl}
			marginRight={20}
			size={80}
		/>
		<Pane
			position="absolute"
			right={20}
			bottom={1}
			height={30}
			width={30}
			backgroundColor="var(--dark-green)"
			display="flex"
			alignItems="center"
			justifyContent="center"
			borderRadius={16}
		>
			<CameraIcon color="var(--white)" />
		</Pane>
	</Pane>
)

export default Photo
