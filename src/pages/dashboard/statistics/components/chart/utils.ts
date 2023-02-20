import dayjs from "dayjs"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { StatisticsTypes } from "../../types"

dayjs.extend(isSameOrBefore)
dayjs.extend(customParseFormat)

const templates = {
	DAY: "YYYY-MM-DD",
	WEEK: "YYYY-MM-DD",
	MONTH: "YYYY-MM",
}

export const sortTime = (data: any, type: StatisticsTypes) =>
	data.sort((a: any, b: any) =>
		dayjs(
			type === "WEEK" ? a?.from : a?.finishedAt,
			templates[type],
		).isSameOrBefore(
			dayjs(type === "WEEK" ? b?.from : b?.finishedAt, templates[type]),
		)
			? 1
			: -1,
	)
