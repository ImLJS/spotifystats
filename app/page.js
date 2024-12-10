import { HeroSection } from '@/components/hero/hero-section';

function HomePage() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <HeroSection />
      </div>
    </main>
  );
}

export default HomePage;
