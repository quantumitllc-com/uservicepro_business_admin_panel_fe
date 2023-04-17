import { request } from "http/"

export const getOrders = <T>(params: T) =>
	request("business/orders", {
		params,
	})

export const getOrdersHistory = <T>(params: T) =>
	request("business/orders/history", {
		params,
	})

export const getOrderDetail = (id?: string) => request(`/business/orders/${id}`)

export const deleteOrder = (orderId?: string, employeeId?: string) =>
	request.patch(`business/orders/${orderId}/unassign`, {
		data: {
			employeeId: [employeeId],
		},
	})

export const getAssignedEmployess = (id: string) =>
	request("company/employees/list", {
		params: {
			officeId: id,
		},
	})

export const assignedEmployess = (id: string | undefined, ids: string[]) =>
	request.post(`business/orders/${id}/assign`, { employeeId: ids })

export const orderTotal = <T>(data: T, id?: string) =>
	request.patch(`business/orders/price/${id}`, data)
