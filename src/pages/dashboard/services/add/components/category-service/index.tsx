import React from "react"

import { Table } from "components/table"
import { useCategoryService } from "./useCategoryService"

const CategoryService = ({ data }: any) => {
	const {
		columns,
		services,
		isFetching,
		isLoading,
	} = useCategoryService({ data })

	return (
		<Table
			isLoading={isLoading}
			isFetching={isFetching}
			columns={columns}
			data={services}
		/>
	)
}

export default CategoryService