import { useEffect, useState } from "react";

function KPI() {
  const [output, setOutput] = useState(40);
  const maxOutput = 60;

  // Update output every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const simulated = Math.floor(35 + Math.random() * 20); // 35–55 kW
      setOutput(simulated);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 px-4 text-center">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">Current Output</h3>
      <div className="text-5xl font-bold text-blue-600 transition-all duration-500">
        {output} kW
      </div>
      <p className="text-gray-500 mt-2">of {maxOutput} kW</p>
    </section>
  );
}

export default KPI;
