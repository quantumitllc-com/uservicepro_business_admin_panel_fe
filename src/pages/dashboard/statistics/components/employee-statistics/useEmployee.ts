import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getEmployeeStatistics } from "services/dashboard/statistics";

interface IEmployeeStatistics {
  top: number;
  officeId: null | string;
}

export const useEmployee = () => {
  const [searchParams] = useSearchParams();
  const officeId = searchParams.get("officeId");

  const { isLoading } = useQuery(["employee-statistics", officeId], () =>
    getEmployeeStatistics<IEmployeeStatistics>({
      officeId,
      top: 5,
    })
  );

  return { isLoading };
};
