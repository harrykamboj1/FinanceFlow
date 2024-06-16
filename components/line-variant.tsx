import { format } from "date-fns";
import {
  Tooltip,
  XAxis,
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Bar,
} from "recharts";
import { CustomToolTip } from "./custom-tooltip";

type Props = {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export const LineVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="date"
          tickFormatter={(value) => format(value, "dd MM")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomToolTip />} />
        <Line
          dot={false}
          dataKey={"income"}
          stroke="#3b82f6"
          strokeWidth={2}
          className="drop-shadow-sm"
        />
        <Line
          dot={false}
          dataKey={"expense"}
          stroke="#f43f5e"
          strokeWidth={2}
          className="drop-shadow-sm"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
