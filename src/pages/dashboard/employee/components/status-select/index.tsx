/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-shadow */
import { Pane, Popover } from "evergreen-ui"
import useBoolean from "hooks/useBoolean"
import styles from "./styles.module.scss"
import { ReactComponent as IconDown } from "../../icons/caret-down.svg"
import { statuses } from "./constants"
import { Pause } from "../pause"

export const StatusSelect = ({ status = "ACTIVE" }): any => {
	const { value, toggle } = useBoolean()
	const { value: valuePause, toggle: togglePause, setFalse } = useBoolean()

	const handleClick = (status: string) => {
		toggle()
		if (status === "PAUSED") {
			togglePause()
		}
	}

	return (
		<>
			<Popover
				isShown={value}
				onOpen={toggle}
				position="bottom-left"
				minWidth="fit-content"
				content={
					<Pane
						display="flex"
						width="fit-content"
						alignItems="center"
						flexDirection="column"
						justifyContent="center"
					>
						<ul className={styles.list}>
							{statuses
								.filter(
									(v) =>
										v.status !== status &&
										v.status !== "INVITED",
								)
								.map(({ title, status }) => (
									<li key={status}>
										<button
											type="button"
											onClick={() => handleClick(status)}
										>
											{title}
										</button>
									</li>
								))}
						</ul>
					</Pane>
				}
			>
				<button
					type="button"
					className={styles[status]}
					disabled={status === "INVITED"}
				>
					<span>
						{statuses.find((v) => v.status === status)?.title}
					</span>
					<div>
						<IconDown />
					</div>
				</button>
			</Popover>
			<Pause isShown={valuePause} setIsShown={setFalse} />
		</>
	)
}
