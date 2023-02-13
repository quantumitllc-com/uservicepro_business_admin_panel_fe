import styles from "./styles.module.scss"

interface IPerRows {
	title: string
	total: number
	size: number
	onChange: (e: number) => void
}

// const sizes = [10, 20, 50]
const sizes = [5, 10, 15]

export const PerRows = ({ size, title, total, onChange }: IPerRows) => (
	<div className={styles.container}>
		<div className={styles.left}>
			{total} {title}
		</div>
		<ul className={styles.list}>
			<li>See:</li>
			{sizes.map((value) => (
				<li
					key={value}
					className={value === size ? styles.active : undefined}
				>
					<button type="button" onClick={() => onChange(value)}>
						{value}
					</button>
				</li>
			))}
		</ul>
	</div>
)
