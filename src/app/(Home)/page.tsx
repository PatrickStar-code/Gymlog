import BreadCrumbComponent from "@/components/BreadCrumb";
import { Dumbbell } from "lucide-react";
import { TCard } from "../Types";
import CardInfo from "@/components/cardInfo";

export default function Home() {
  const thisRoute = {
    principal: "Home",
  };

  const Cards: TCard[] = [
    {
      icon: <Dumbbell />,
      title: "Treinos Realizados",
      quantity: 4,
    },
  ];

  return (
    <main className="p-4">
      <section className="">
        <BreadCrumbComponent {...thisRoute} />
        <div className="grid grid-cols-4 items-center justify-center">
          {Cards.map((card) => (
            <CardInfo key={card.title} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}
