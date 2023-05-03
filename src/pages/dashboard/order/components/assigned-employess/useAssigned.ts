import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { deleteOrder } from "services/dashboard/order";

export const useAssigned = () => {
  const { orderId } = useParams();
  const queryClient = useQueryClient();

  const { mutate, isLoading: isLoadingDelete } = useMutation((id: any) =>
    deleteOrder(orderId, id)
  );

  const handleDelete = (id: string) =>
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(["order-detail", orderId]);
        toast.success("The employee is unassigned successfully!");
      },
    });

  return { handleDelete, isLoadingDelete };
};
