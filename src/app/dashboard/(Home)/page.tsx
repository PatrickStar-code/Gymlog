"use client";
import BreadCrumbComponent from "@/components/BreadCrumb";
import { Beef, Dumbbell, HomeIcon, Pizza, Soup } from "lucide-react";
import CaloriesChart from "@/components/CaloriesChart";
import { Card } from "@/components/ui/card";
import ProteinsChart from "@/components/ProteinChart";
import MusclePieChart from "@/components/WorkoutsChart";
import FatsPieChart from "@/components/FatChart";
import CardInfo from "@/components/cardInfo";
import { useContext, useEffect } from "react";
import { verifyRefreshTokenClient } from "@/app/Actions/VerifyRefreshToken";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { TCard } from "@/app/Types";
import { getDataFromUser } from "@/app/Actions/GetDataFromUser";
import { UserContext } from "@/app/Context/UserContext";

export default function Home() {
  const Router = useRouter();
  const { handleSetUser } = useContext(UserContext);

  useEffect(() => {
    const refreshToken = getCookie("refresh-token");

    if (refreshToken) {
      verifyRefreshTokenClient(refreshToken)
        .then((res) => localStorage.setItem("token", res.tokenJwt))
        .catch(console.error);
    } else {
      Router.push("/");
    }
  }, []);

  useEffect(() => {
    const refreshToken = getCookie("refresh-token");

    if (refreshToken) {
      const token = localStorage.getItem("token");
      if (!token) return;
      getDataFromUser({ token, refreshToken })
        .then((res) => handleSetUser(res))
        .catch(console.error);
    }
  }, []);

  const thisRoute = {
    principal: "Home",
    icon: (
      <HomeIcon className="shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  };

  const Cards: TCard[] = [
    {
      icon: <Dumbbell className=" text-blue-400" />,
      title: "Treinos Realizados",
      quantity: 4,
    },
    {
      icon: <Soup className=" text-red-400" />,
      title: "Calorias Consumidas",
      quantity: 4,
      expected_quantity: 1500,
      unit: "kcal",
    },
    {
      icon: <Beef className=" text-orange-400" />,
      title: "Proteinas Consumidas",
      quantity: 4,
      expected_quantity: 125,
      unit: "g",
    },
    {
      icon: <Pizza className=" text-green-400" />,
      title: "Gordura Consumidas",
      quantity: 4,
      expected_quantity: 125,
      unit: "g",
    },
  ];

  return (
    <main className="p-4 h-screen w-screen overflow-x-hidden">
      <section className="">
        <BreadCrumbComponent {...thisRoute} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-12 md:gap-8  ml-12 items-center justify-center ">
          {Cards.map((card) => (
            <CardInfo key={card.title} {...card} />
          ))}
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 md:ml-12">
            <Card>
              <CaloriesChart />
            </Card>
            <Card>
              <ProteinsChart />
            </Card>
            <Card>
              <MusclePieChart />
            </Card>
            <Card>
              <FatsPieChart />
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
