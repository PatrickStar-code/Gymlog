"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Registrar todos os componentes do Chart.js
Chart.register(...registerables);

export default function CaloriesChart() {
  const chartRef = useRef<Chart<"line", (string | number)[], string> | null>(
    null
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Dados de exemplo - substitua pelos seus dados reais
    const data = {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      datasets: [
        {
          label: "Calorias (kcal)",
          data: [1800, 2100, 1900, 2200, 2000, 2400, 2300],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.4,
          fill: true,
          pointRadius: 3,
          pointHoverRadius: 5,
          borderWidth: 2,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          mode: "index" as const,
          intersect: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    };

    // Destruir gráfico anterior se existir
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Criar novo gráfico
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });

    // Limpeza ao desmontar o componente
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4 bg-back rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">
        📅 Calorias nos últimos dias
      </h2>
      <div>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
