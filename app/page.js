import { HeroSection } from '@/components/hero/hero-section';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

async function HomePage() {
  const session = await auth();

  if(session){
    redirect('/dashboard');
  }
  
  return (
    <main className="flex flex-grow flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <HeroSection />
      </div>
    </main>
  );
}

export default HomePage;
