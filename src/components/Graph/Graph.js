import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./Graph.scss";

const url = "https://disease.sh/v3/covid-19/historical/all?lastdays=14";

function Graph() {
  const {
    data: { deaths },
    loading,
  } = useFetch(url);
  const [chartState, setChartState] = useState({
    chartData: "",
    chartOptions: {
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Number of Accumulated Deaths in the Last 14 Days",
          font: {
            size: 20,
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      elements: {
        point: {
          radius: 6,
        },
      },
    },
  });

  useEffect(() => {
    setChartState((prevState) => ({
      ...prevState,
      chartData: {
        labels: !loading && Object.keys(deaths),
        datasets: [
          {
            label: "Deaths",
            data: !loading && Object.values(deaths),
            backgroundColor: "#d81b60",
            borderColor: "#d81b60",
          },
        ],
      },
    }));
  }, [loading, deaths]);

  return (
    <section className="graph">
      {!loading && (
        <Line data={chartState.chartData} options={chartState.chartOptions} />
      )}
    </section>
  );
}

export default Graph;
