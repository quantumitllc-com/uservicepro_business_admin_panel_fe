import { Pane } from "evergreen-ui"

import useIsShown from "shared/lib/hooks/useIsShown"
import MyHeading from "shared/ui/heading"
import { ReactComponent as Indicator } from "./indicator.svg"
import MyText from "../../shared/ui/text"
import styles from "./styles.module.scss"
import EmployeeDetails from "../employee-details"

const Employee = () => {
	const { setIsShown, isShown } = useIsShown()

	return (
		<>
			<Pane
				onClick={() => setIsShown(true)}
				className={styles.employee}
				display="flex"
				paddingY={10}
				justifyContent="space-between"
				borderBottom="1px solid var(--stroke-block)"
				alignItems="center"
			>
				<Pane>
					<MyHeading>Camila Marci</MyHeading>
					<Pane gap={5} display="flex">
						<MyHeading>29</MyHeading>
						<MyText>orders done</MyText>
					</Pane>
				</Pane>
				<Pane>
					<Indicator />
				</Pane>
			</Pane>
			<EmployeeDetails isShown={isShown} setIsShown={setIsShown} />
		</>
	)
}

export default Employee
