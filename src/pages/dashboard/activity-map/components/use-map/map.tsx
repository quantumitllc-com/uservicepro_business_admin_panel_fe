// @ts-ignore
// TODO: type for library
import USAMap from "react-usa-map"
import { Pane } from "evergreen-ui"
import "./styles.module.scss"
import { Popup } from "../popup"
import { useMap } from "./useMap"

export const UsaMap = () => {
	const { value, state, mapHandler, statesCustomConfig } = useMap()

	return (
		<Pane width="100%" position="relative">
			<USAMap
				width="100%"
				height={300}
				onClick={mapHandler}
				defaultFill="#ECEFF7"
				customize={statesCustomConfig(state?.key)}
			/>
			{value && (
				<Pane position="absolute" top="0" right="0">
					<Popup {...state?.selected} />
				</Pane>
			)}
		</Pane>
	)
}
