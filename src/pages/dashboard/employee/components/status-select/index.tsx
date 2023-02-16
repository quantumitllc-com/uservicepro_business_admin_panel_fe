/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-shadow */
import { Pane, Popover } from "evergreen-ui"
import useBoolean from "hooks/useBoolean"
import { useParams } from "react-router"
import { toast } from "react-toastify"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editEmployeeStatus } from "services/dashboard/employee"
import styles from "./styles.module.scss"
import { ReactComponent as IconDown } from "../../icons/caret-down.svg"
import { statuses } from "../../constants/status"
import { Pause } from "../pause"

dayjs.extend(duration)
interface IStatus {
	employeeStatus: string
	pauseDate?: string | null
}

export const StatusSelect = ({ status = "ACTIVE" }): any => {
	const queryClient = useQueryClient()
	const { employeeId } = useParams()
	const { value, toggle } = useBoolean()
	const { value: valuePause, toggle: togglePause, setFalse } = useBoolean()
	const { mutate } = useMutation(
		(data: IStatus) => editEmployeeStatus<IStatus>(data, employeeId),
		{
			onSuccess: () => {
				setFalse()
				toast.success("Successfully updated!")
				queryClient.invalidateQueries(["employee-profile"])
			},
		},
	)

	const handleClick = (status: string) => {
		toggle()
		if (status === "PAUSED") {
			togglePause()
		} else {
			mutate({ employeeStatus: status })
		}
	}

	const handleOnPause = (days: number) => {
		const pauseDate = dayjs()
			.add(dayjs.duration({ days }))
			.format("YYYY-MM-DD")
		mutate({ employeeStatus: "PAUSED", pauseDate })
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
			<Pause
				isShown={valuePause}
				setIsShown={setFalse}
				onPause={handleOnPause}
			/>
		</>
	)
}
