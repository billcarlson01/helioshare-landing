function SolarPerformance() {
    return (
      <section className="bg-gray-50 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Live Solar Performance</h2>
        <p className="mb-6 text-gray-700">Tracking real-time output from a 50kW rooftop system</p>
        <img src="/solar_output_chart.png" alt="Solar Output Chart" className="mx-auto rounded shadow-md max-w-md" />
      </section>
    );
  }
  
  export default SolarPerformance;
  