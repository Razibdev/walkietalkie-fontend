import React from "react";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";
export default function SmallCards
() {
    const orderStatus = [
      {
        title: "Today Orders",
        numbers: 600,
        iconBg: "bg-green-600",
        icon: ShoppingCart,
      },
      {
        title: "Orders Pending",
        numbers: 100,
        iconBg: "bg-blue-600",
        icon: Loader2,
      },
      {
        title: "Order Processing",
        numbers: 200,
        iconBg: "bg-orange-600",
        icon: RefreshCcw,
      },
      {
        title: "Orders Delivers",
        numbers: 300,
        iconBg: "bg-purple-600",
        icon: CheckCheck,
      },
    ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
      {orderStatus.map((item, i) => {
        return <SmallCard data={item} key={i} />;
      })}
    </div>
  );
}
