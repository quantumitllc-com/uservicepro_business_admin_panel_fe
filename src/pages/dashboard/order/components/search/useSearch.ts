import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import {
  assignedEmployess,
  getAssignedEmployess,
} from "services/dashboard/order";

export interface ISearch {
  officeId: string;
  serviceId: string;
  list?: { id: string; name: string }[];
}

export const useSearch = ({ officeId, serviceId }: ISearch) => {
  const { orderId } = useParams();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [ids, setIds] = useState<string[]>([]);
  const { data = { data: [] }, isLoading } = useQuery(
    ["assigned-employees", officeId, serviceId],
    () => getAssignedEmployess<ISearch>({ officeId, serviceId })
  );

  const handleSearch = (e: any) => setSearch(e.target.value);

  const { mutate, isLoading: assignIsLoading } = useMutation(
    () => assignedEmployess(orderId, ids),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["order-detail"]);
        toast.success("Assigned successfully!");
      },
      onError: (error: any) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return {
    ids,
    data,
    search,
    setIds,
    mutate,
    isLoading,
    handleSearch,
    assignIsLoading,
  };
};
