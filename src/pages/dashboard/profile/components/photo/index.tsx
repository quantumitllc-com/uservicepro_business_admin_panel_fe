import { Avatar, CameraIcon, Pane } from "evergreen-ui"

import { CompanyProfile } from "types/dashboard/profile"
import styles from "./styles.module.scss"
import { usePhoto } from "./usePhoto"

const loader =
	"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"

const Photo = ({ data }: CompanyProfile) => {
	const { isLoading, selectPhoto, isLoadingSetPhoto } = usePhoto()

	return (
		<Pane position="relative">
			<Avatar
				src={(isLoading || isLoadingSetPhoto) ? loader : data.pictureUrl}
				marginRight={20}
				size={80}
			/>
			<label htmlFor="upload" className={styles.label}>
				<CameraIcon className={styles.avatar} color="var(--white)" />
				<input
					accept="image/png, image/jpeg"
					onChange={selectPhoto}
					type="file"
					id="upload"
					className={styles.hidden}
				/>
			</label>
		</Pane>
	)
}

export default Photo
