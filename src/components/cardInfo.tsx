import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { TCard } from "@/app/Types";

export default function CardInfo(data: TCard) {
  return (
    <Card className=" mt-4 flex flex-col w-[17.5rem] lg:w-[22.5rem]">
      <CardHeader className="text-start text-xl">{data.title}</CardHeader>
      <div className="flex justify-between">
        <CardContent> {data.icon}</CardContent>
        <div className="flex  items-center px-8">
          <p className=" text-xl">
            {data.quantity} {data.unit}
          </p>
          {data.expected_quantity && (
            <p className="text-end text-sm">
              /{data.expected_quantity}
              {data.unit}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
