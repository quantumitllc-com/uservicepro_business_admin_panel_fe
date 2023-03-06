import styles from "./styles.module.scss"
import { ReactComponent as IconPeople } from "../../icons/people.svg"
import { ReactComponent as IconLocation } from "../../icons/location.svg"
import { ReactComponent as IconSetting } from "../../icons/setting.svg"

interface IPopup {
	employees: number
	offices: number
	rating: string
	services: number
	state: string
}

export const Popup = ({
	state,
	rating,
	offices,
	services,
	employees,
}: Partial<IPopup>) => (
	<div className={styles.container}>
		<div className={styles.header}>{state} State</div>
		<div className={styles.wrap}>
			<div className={styles.left}>
				<h2>{rating === "NaN" ? 0 : rating}</h2>
				<span>Average rating</span>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapStatistics}>
					<div className={styles.wrapIcon}>
						<IconPeople />
					</div>
					<div className={styles.info}>
						<h3>{employees}</h3>
						<span>Number of employees</span>
					</div>
				</div>
				<div className={styles.wrapStatistics}>
					<div className={styles.wrapIcon}>
						<IconLocation />
					</div>
					<div className={styles.info}>
						<h3>{offices}</h3>
						<span>Offices</span>
					</div>
				</div>
				<div className={styles.wrapStatistics}>
					<div className={styles.wrapIcon}>
						<IconSetting />
					</div>
					<div className={styles.info}>
						<h3>{services}</h3>
						<span>Services offered</span>
					</div>
				</div>
			</div>
		</div>
	</div>
)
