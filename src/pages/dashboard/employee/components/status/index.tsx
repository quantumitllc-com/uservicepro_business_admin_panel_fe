import styles from "./styles.module.scss"

interface IStatus {
	status: boolean
}
export const Status = ({ status }: IStatus) => (
	<div
		className={`${styles.container} ${
			status ? styles.active : styles.inactive
		}`}
	>
		{status ? "Active" : "InActive"}
	</div>
)
