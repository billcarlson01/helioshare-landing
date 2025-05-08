import Header from './components/Header';
import CTA from './components/CTA';
import SolarPerformance from './components/SolarPerformance';
import KPI from './components/KPI';
import LiveGauge from './components/LiveGauge';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
  <CTA />
  <LiveGauge />
  <SolarPerformance />
  <KPI />
  
      </main>
    </div>
  );
}

export default App;
