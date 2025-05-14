"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function MusclePieChart() {
  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const data = {
      labels: [
        "Peito",
        "Ombros",
        "Tríceps",
        "Costas",
        "Bíceps",
        "Quadríceps",
        "Posterior",
        "Glúteo",
        "Abdômen",
        "Panturrilha",
        "Cardio / Leve",
      ],
      datasets: [
        {
          data: [1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 1], // Frequência por músculo
          backgroundColor: [
            "#FF6F3C", // Laranja
            "#FF9F40", // Laranja claro
            "#FFD580", // Amarelo claro
            "#4BC0C0", // Verde água
            "#36A2EB", // Azul
            "#9966FF", // Roxo
            "#C9CBCF", // Cinza claro
            "#FF6384", // Rosa
            "#F6C90E", // Amarelo vibrante
            "#2ECC71", // Verde
            "#7F8C8D", // Cinza escuro
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "right" as const,
        },
        tooltip: {
          callbacks: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            label: function (context: any) {
              const label = context.label || "";
              const value = context.raw;
              return `${label}: ${value} treino(s)`;
            },
          },
        },
      },
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "pie",
        data,
        options,
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4 bg-background rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">
        📊 Exercícios por Músculo na semana
      </h2>
      <div className="h-72 flex items-center justify-center">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
