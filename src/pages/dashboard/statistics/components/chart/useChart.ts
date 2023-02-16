import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getChart } from "services/dashboard/statistics";
import { useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const DAY = dayjs().subtract(dayjs.duration(7, "d")).format("YYYY-MM-DD");
const WEEK = dayjs().subtract(dayjs.duration(28, "d")).format("YYYY-MM-DD");
const MONTH = dayjs().subtract(dayjs.duration(365, "d")).format("YYYY-MM-DD");

const defaultDates = {
  DAY,
  WEEK,
  MONTH,
};

interface IGetChart {
  from: string;
  type: string;
  officeId: null | string;
}

const defaultDate = dayjs()
  .subtract(dayjs.duration(7, "d"))
  .format("YYYY-MM-DD");

export const useChart = () => {
  const [searchParams] = useSearchParams();
  const officeId = searchParams.get("officeId");
  const [type, setType] = useState("DAY");
  const [from, setFrom] = useState(defaultDate);

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
        const categories = data.data.map((v: any) => v?.finishedAt);
        const series = [
          {
            name: "Income",
            data: data.data.map((v: any) => v?.income),
          },
          {
            name: "Sales",
            data: data.data.map((v: any) => v?.sales),
          },
        ];

        return { ...rest, ...data, series, categories };
      },
    }
  );

  const handleChangeType = (SelectedType: string) => {
    if (defaultDates[type as "DAY" | "WEEK" | "MONTH"] === from) {
      setFrom(defaultDates[SelectedType as "DAY" | "WEEK" | "MONTH"]);
    }
    setType(SelectedType);
  };

  const handleChangeDate = (e: any) => {
    setFrom(e.target.value);
  };

  return { type, from, data, isLoading, handleChangeType, handleChangeDate };
};
