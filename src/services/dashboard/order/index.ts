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
	request.delete(`business/orders/${orderId}/unassign`, {
		data: {
			employeeId: [employeeId],
		},
	})

export const getAssignedEmployess = () => request("company/employees/list")

export const assignedEmployess = (id: string | undefined, ids: string[]) =>
	request.post(`business/orders/${id}/assign`, { employeeId: ids })
