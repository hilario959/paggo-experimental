import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { ProductCarousel } from './sections/ProductCarousel';
import { AcceptPayments } from './sections/AcceptPayments';
import { PointOfSale } from './sections/PointOfSale';
import { ZavoIntelligence } from './sections/ZavoIntelligence';
import { BusinessTypes } from './sections/BusinessTypes';
import { MultiLocation } from './sections/MultiLocation';
import { FeaturesBento } from './sections/FeaturesBento';
import { HardwareOptions } from './sections/HardwareOptions';
import { CTASection } from './sections/CTASection';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <ProductCarousel />
        <AcceptPayments />
        <PointOfSale />
        <ZavoIntelligence />
        <BusinessTypes />
        <MultiLocation />
        <FeaturesBento />
        <HardwareOptions />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
