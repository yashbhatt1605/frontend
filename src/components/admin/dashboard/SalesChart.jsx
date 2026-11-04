import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SalesChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Sales",
      data: [45, 70, 55, 90, 75, 105, 120],
      backgroundColor: "#8b5cf6",
      borderRadius: 7,
      borderSkipped: false,
      maxBarThickness: 34,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(148, 163, 184, 0.18)" },
        ticks: { maxTicksLimit: 5 },
      },
      x: { grid: { display: false } },
    },
  };

  return (
    <section className="sales-chart-card">
      <h2 className="text-xl font-bold mb-5">Sales Overview</h2>
      <div className="sales-chart-canvas">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default SalesChart;
