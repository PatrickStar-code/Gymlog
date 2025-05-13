import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { TCard } from "@/app/Types";

export default function CardInfo(data: TCard) {
  return (
    <Card className=" mt-4 flex flex-col w-[200px]">
      <CardHeader>{data.title}</CardHeader>
      <div className="flex">
        <CardContent> {data.icon}</CardContent>
        <CardFooter className="text-end">{data.quantity}</CardFooter>
      </div>
    </Card>
  );
}
