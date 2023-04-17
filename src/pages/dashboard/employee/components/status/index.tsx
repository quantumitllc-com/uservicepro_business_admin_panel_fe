import { statuses } from "constants/employee"
import styles from "./styles.module.scss"

interface IStatus {
	status: string
}
export const Status = ({ status }: IStatus) => (
	<div className={`${styles.container} ${styles[status]}`}>
		{statuses.find((v) => v.status === status)?.title}
	</div>
)
