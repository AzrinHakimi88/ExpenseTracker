import AddExpense from "@/components/addExpense";
import DoughnutChart from "@/components/doughnutChart";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-wrap bg-slate-100  m-3 rounded-3xl">
        <AddExpense/>
        <DoughnutChart/>
    </div>
  );
}
