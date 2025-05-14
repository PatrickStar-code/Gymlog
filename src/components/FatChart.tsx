/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function FatsPieChart() {
  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const data = {
      labels: [
        "Gorduras Saturadas",
        "Gorduras Insaturadas",
        "Gorduras Trans",
        "Outras Gorduras",
      ],
      datasets: [
        {
          data: [15, 30, 5, 10], // Quantidade de gordura consumida (em gramas)
          backgroundColor: [
            "#FF6F3C", // Laranja (Saturadas)
            "#4BC0C0", // Verde água (Insaturadas)
            "#FF6384", // Rosa (Trans)
            "#F6C90E", // Amarelo (Outras)
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
            label: function (context: any) {
              const label = context.label || "";
              const value = context.raw;
              return `${label}: ${value}g`;
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
        🍽️ Distribuição de Gorduras no dia
      </h2>
      <div className="h-72 w-full  flex items-center justify-center">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
