"use client";

import { format, subDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { DataCard } from "./data-card";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { FaPiggyBank } from "react-icons/fa";

type Period = {
  from: string | Date | undefined;
  to: string | Date | undefined;
};

export const DataGrid = () => {
  const { data } = useGetSummary();
  const params = useSearchParams();
  const to = params.get("to") || undefined;
  const from = params.get("from") || undefined;
  const accountId = params.get("accountId") || undefined;

  const dateRange = formatDateRange({ to, from });

  return (
    <div>
      <DataCard
        title="Remaining"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        icon={FaPiggyBank}
        variant={"default"}
        dateRange={dateRange}
      />
    </div>
  );
};

export function formatDateRange(period?: Period) {
  const defaultTo = new Date();
  const defaultFrom = subDays(defaultTo, 30);

  if (!period?.from) {
    return `${format(defaultFrom, "LLL dd")}- ${format(defaultTo, "LLL dd y")}`;
  }

  if (period?.to) {
    return `${format(period.from, "LLL dd")}- ${format(
      period.to,
      "LLL dd y"
    )}}`;
  }
  console.log(format(period.from, "LLL dd y"));
  return format(period.from, "LLL dd y");
}
