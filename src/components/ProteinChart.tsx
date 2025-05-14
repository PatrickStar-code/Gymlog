"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Registrar os componentes do Chart.js
Chart.register(...registerables);

export default function ProteinsChart() {
  const chartRef = useRef<Chart<"line", (string | number)[], string> | null>(
    null
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const data = {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      datasets: [
        {
          label: "Proteínas (g)",
          data: [80, 95, 100, 110, 90, 120, 105], // Exemplo
          borderColor: "rgba(255, 111, 60, 1)", // Laranja vibrante
          backgroundColor: "rgba(255, 111, 60, 0.2)", // Laranja claro com transparência
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
        legend: { display: false },
        tooltip: {
          enabled: true,
          mode: "index" as const,
          intersect: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          grid: { display: false },
          ticks: { display: false },
        },
        x: {
          grid: { display: false },
        },
      },
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: "line",
      data,
      options,
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  return (
    <div className="p-4 bg-back rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">
        📈 Proteínas nos últimos dias
      </h2>
      <div className="h-40">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
