import { toast } from "react-toastify"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Avatar, Pane } from "evergreen-ui"
import { TableColumn } from "react-data-table-component"
import React, { useMemo } from "react"

import useBoolean from "hooks/useBoolean"
import MyButton from "components/button"
import { getServices } from "services/dashboard/services"
import { addServiceToOffice } from "services/dashboard/offices"

export interface DataRow {
	id: string
	serviceId: string
	serviceName: string
	pictureUrl: string
	description: number
	num: number
}

export const useAddService = ({ office }: any) => {
	const { value, setValue, toggle } = useBoolean(false)
	const queryClient = useQueryClient()

	const {
		data = [],
		isFetching,
		isLoading,
	} = useQuery(["services"], getServices, {
		onError: (error: any) => {
			toast.error(error.message)
		},
		select: ({ data }) => [...data],
	})

	const { mutate, isLoading: addIsLoading } = useMutation(
		(serviceId: string) => addServiceToOffice(office.id, serviceId),
		{
			onSuccess: () => {
				toast.success("Service was added to office successfully")
				toggle()
				queryClient.invalidateQueries(["services"])
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	const handleClick = (officeId: string) => {
		mutate(officeId)
	}

	const columns: Array<TableColumn<DataRow>> = useMemo(
		() => [
			{
				ignoreRowClick: true,
				name: "Service name",
				sortable: true,
				selector: (row) => row.serviceName,
				cell: (row) => (
					<Pane display="flex" gap={12} alignItems="center">
						<Avatar
							src={row.pictureUrl}
							name="img categories"
							size={40}
						/>
						{row.serviceName}
					</Pane>
				),
			},
			{
				ignoreRowClick: true,
				name: "Service ID",
				sortable: true,
				selector: (row) => row.serviceId,
			},
			{
				ignoreRowClick: true,
				name: "Applicable office",
				sortable: true,
				selector: (row) => row.num,
			},
			{
				ignoreRowClick: true,
				button: true,
				cell: (row) => (
					<MyButton
						isLoading={addIsLoading}
						small="true"
						appearance="primary"
						onClick={() => handleClick(row.id)}
					>
						Add
					</MyButton>
				),
			},
		],
		[],
	)

	return {
		value,
		setValue,
		toggle,
		columns,
		data,
		isFetching,
		isLoading,
	}
}
