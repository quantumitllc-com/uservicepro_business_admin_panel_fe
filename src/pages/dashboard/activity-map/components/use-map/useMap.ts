import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import useBoolean from "hooks/useBoolean"
import { getActivityMap } from "services/dashboard/map"

interface ISelectedMap {
	key: string
	selected: {
		employees: number
		offices: number
		rating: string
		services: number
		state: string
	}
}

export const useMap = () => {
	const { value, setFalse, setTrue } = useBoolean()
	const [state, setState] = useState<Partial<ISelectedMap>>()

	const { data = [] } = useQuery(["activity-map"], getActivityMap, {
		select: (data) => data.data,
	})

	const statesCustomConfig = (chosen = "") => ({
		[chosen]: {
			fill: "#3d8798",
		},
	})

	const mapHandler = (event: any) => {
		if (state?.key === event.target.dataset.name) {
			setFalse()
			setState({})
		} else {
			const selected = data.find(
				(v: any) => v.state === event.target.textContent,
			)
			setState({ key: event.target.dataset.name, selected })
			setTrue()
		}
	}

	return { value, state, mapHandler, statesCustomConfig }
}
