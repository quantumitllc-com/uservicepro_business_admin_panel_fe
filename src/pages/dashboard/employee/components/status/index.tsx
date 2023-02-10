import styles from "./styles.module.scss"
import { statuses } from "../../constants/status"

interface IStatus {
	status: string
}
export const Status = ({ status }: IStatus) => (
	<div className={`${styles.container} ${styles[status]}`}>
		{statuses.find((v) => v.status === status)?.title}
	</div>
)
