"use client";

import { format, subDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { DataCard, DataCardLoading } from "./data-card";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

type Period = {
  from: string | Date | undefined;
  to: string | Date | undefined;
};

export const DataGrid = () => {
  const { data, isLoading } = useGetSummary();
  const params = useSearchParams();
  const to = params.get("to") ?? undefined;
  const from = params.get("from") ?? undefined;
  const accountId = params.get("accountId") ?? undefined;

  const dateRange = formatDateRange({ to, from });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
        <DataCardLoading />
        <DataCardLoading />
        <DataCardLoading />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
      <DataCard
        title="Remaining"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        icon={FaPiggyBank}
        dateRange={dateRange}
      />
      <DataCard
        title="Income"
        value={data?.incomeAmount}
        percentageChange={data?.incomeChange}
        icon={FaArrowTrendUp}
        dateRange={dateRange}
      />
      <DataCard
        title="Expenses"
        value={data?.expensesAmount}
        percentageChange={data?.expenseChange}
        icon={FaArrowTrendDown}
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
    return `${format(period.from, "LLL dd")}- ${format(period.to, "LLL dd y")}`;
  }
  console.log(format(period.from, "LLL dd y"));
  return format(period.from, "LLL dd y");
}
