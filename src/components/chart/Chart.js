import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = ({ chartDataPoints }) => {
  const chartDataPointsValues = chartDataPoints.map(
    (datapoint) => datapoint.value
  );
  const totalAmountMax = Math.max(...chartDataPointsValues); //drar ut varje enskilt värde från arrayen
  return (
    <div className="chart">
      {chartDataPoints.map(({ label, value, maxValue }, i) => (
        <ChartBar
          key={`${label}-${i}`}
          value={value}
          maxValue={totalAmountMax}
          label={label}
        />
      ))}
    </div>
  );
};

export default Chart;
