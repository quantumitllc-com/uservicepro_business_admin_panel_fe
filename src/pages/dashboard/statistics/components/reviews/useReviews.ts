import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getReviews } from "services/dashboard/statistics";

interface IReviews {
  officeId: null | string;
}

export const useReviews = () => {
  const [searchParams] = useSearchParams();
  const officeId = searchParams.get("officeId");

  const { data = { totalReviews: 0 }, isLoading } = useQuery(
    ["review-statistics", officeId],
    () =>
      getReviews<IReviews>({
        officeId,
      }),
    {
      select: ({ data, ...rest }) => {
        const newdata = Array.from({ length: 5 }, (_, i) => i + 1)
          .reverse()
          .map((num) => (data[num] ? data[num] : 0));
        const series = [
          {
            data: newdata,
          },
        ];
        return { ...data, ...rest, series };
      },
    }
  );

  return { data, isLoading };
};
