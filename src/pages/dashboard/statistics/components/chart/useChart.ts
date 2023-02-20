import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
import { getChart } from "services/dashboard/statistics"
import { useState } from "react"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { sortTime } from "./utils"
import { StatisticsTypes } from "../../types"

dayjs.extend(duration)
dayjs.extend(isSameOrBefore)
dayjs.extend(customParseFormat)

const DAY = dayjs().subtract(dayjs.duration(7, "d")).format("YYYY-MM-DD")
const WEEK = dayjs().subtract(dayjs.duration(28, "d")).format("YYYY-MM-DD")
const MONTH = dayjs().subtract(dayjs.duration(365, "d")).format("YYYY-MM-DD")

const defaultDates = {
	DAY,
	WEEK,
	MONTH,
}

interface IGetChart {
	from: string
	type: string
	officeId: null | string
}

const defaultDate = dayjs()
	.subtract(dayjs.duration(7, "d"))
	.format("YYYY-MM-DD")

export const useChart = () => {
	const [searchParams] = useSearchParams()
	const officeId = searchParams.get("officeId")
	const [type, setType] = useState<StatisticsTypes>("DAY")
	const [from, setFrom] = useState(defaultDate)

	const {
		data = {
			totalIncome: 0,
			tottalSales: 0,
		},
		isLoading,
	} = useQuery(
		["statistics-chart", type, from, officeId],
		() =>
			getChart<IGetChart>({
				type,
				from,
				officeId,
			}),
		{
			select: ({ data, ...rest }: any) => {
				const newData = sortTime(data.data, type).reverse()
				const categories = newData.map((v: any) =>
					type === "WEEK" ? v?.from : v?.finishedAt,
				)

				const series = [
					{
						name: "Income",
						data: newData.map((v: any) => v?.income),
					},
					{
						name: "Sales",
						data: newData.map((v: any) => v?.sales),
					},
				]

				return { ...rest, ...data, series, categories }
			},
		},
	)

	const handleChangeType = (SelectedType: StatisticsTypes) => {
		if (defaultDates[type] === from) {
			setFrom(defaultDates[SelectedType])
		}
		setType(SelectedType)
	}

	const handleChangeDate = (e: any) => {
		setFrom(e.target.value)
	}

	return { type, from, data, isLoading, handleChangeType, handleChangeDate }
}
