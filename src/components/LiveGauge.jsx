import { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";

function LiveGauge() {
  const [value, setValue] = useState(0.0);
  const maxKW = 60;

  // Typical normalized insolation curve (approximate for Reno)
  const insolationCurve = [
    0, 0, 0, 0, 0, 0.05, 0.15, 0.35, 0.65, 0.9, 1.0, 0.95,
    0.85, 0.7, 0.5, 0.3, 0.1, 0.02, 0, 0, 0, 0, 0, 0
  ];

  // Update output every 5 seconds
  useEffect(() => {
    const update = () => {
      const hour = new Date().getHours(); // 0–23
      const baseOutput = insolationCurve[hour] * maxKW;
      const noise = Math.random() * 4 - 2; // ±2 kW
      const simulatedKW = Math.max(0, baseOutput + noise);
      setValue(simulatedKW / maxKW); // Normalize to 0–1 for gauge
    };

    update(); // initial run
    const interval = setInterval(update, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Power Output</h2>

      <div className="w-full max-w-md mx-auto">
        <GaugeChart
          id="solar-performance-gauge"
          percent={value}
          nrOfLevels={20}
          textColor="#1f2937"
          colors={["#d1fae5", "#10b981", "#047857"]}
          arcWidth={0.3}
          needleColor="#1e40af"
          animate={true}
        />
      </div>

      <p className="text-lg text-gray-600 mt-2">{Math.round(value * maxKW)} kW of {maxKW} kW</p>
    </section>
  );
}

export default LiveGauge;
