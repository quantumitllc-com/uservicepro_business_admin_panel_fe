import { useQuery } from "@tanstack/react-query"
import { getLocationList } from "services/dashboard/employee"

export const useLocation = () => {
	const {
		data: locationData = { content: [] },
		isLoading: isLoadingLocation,
	} = useQuery(["service-locations"], getLocationList, {
		select: ({ data, ...rest }) => ({ ...rest, ...data }),
	})

	return { dataLocation: locationData.content, isLoadingLocation }
}
