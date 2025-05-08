import { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";

function LiveGauge() {
  const [value, setValue] = useState(0.7);

  useEffect(() => {
    const interval = setInterval(() => {
      const simulatedKW = Math.floor(35 + Math.random() * 20);
      setValue(simulatedKW / 60);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Power Output</h2>

      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
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

      <p className="text-lg text-gray-600 mt-2">{Math.round(value * 60)} kW of 60 kW</p>
    </section>
  );
}

export default LiveGauge;
