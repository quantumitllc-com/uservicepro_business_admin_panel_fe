import { Pane, Switch } from "evergreen-ui"

import MyText from "components/text"
import { useEdit } from "pages/dashboard/offices/edit/useEdit"

const SwitchOffice = () => {
	const { handleChangeMainOffice, checked } = useEdit()

	return (
		<Pane display="flex" alignItems="center" gap={8}>
			<MyText>Main Branch</MyText>
			<Switch checked={checked} onChange={handleChangeMainOffice} />
		</Pane>
	)
}

export default SwitchOffice
