import { Pane, TextInput } from "evergreen-ui";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Tabs } from "../tabs";
import { useChart } from "./useChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export const Chart = () => {
  const {
    type,
    from,
    data,
    isLoading,
    handleChangeType,
    handleChangeDate,
  } = useChart();

  return (
    <Pane
      width="100%"
      padding={10}
      borderRadius={10}
      background="white"
      display="flex"
      border="1px solid #E9ECF1"
    >
      <Pane width="30%">dd</Pane>
      <Pane width="70%">
        <Pane gap={10} display="flex" alignItems="center">
          <TextInput type="date" value={from} onChange={handleChangeDate} />
          <Tabs value={type} onChange={handleChangeType} />
        </Pane>
        {isLoading ? null : (
          <Pane>
            <Bar options={options} data={data.list} />
          </Pane>
        )}
      </Pane>
    </Pane>
  );
};
