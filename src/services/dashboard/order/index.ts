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
	request.patch(
		`business/orders/${orderId}/unassign?employeeId=${employeeId}`,
	)

export const getAssignedEmployess = <T>(params: T) =>
	request("company/employees/list", {
		params,
	})

export const assignedEmployess = (id: string | undefined, ids: string[]) =>
	request.post(`business/orders/${id}/assign`, { employeeId: ids })

export const orderTotal = <T>(data: T, id?: string) =>
	request.patch(`business/orders/price/${id}`, data)
