import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/dark-mode/mode-toggle'
import Image from 'next/image';

const AuthPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b p-4">
        <div className="flex items-center space-x-3">
          <Icons.logo />
          <span className="text-xl font-bold">Spotify Stats</span>
        </div>
        <div className="flex items-center space-x-3">
          <ModeToggle />
          <Button>Sign In</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-grow flex-col items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Content Section */}
          <div className="flex flex-col items-center md:flex-col lg:flex-row">
            <div className="text-center md:text-center lg:w-1/2 lg:text-left lg:pr-12">
              <h1 className="mb-4 text-4xl font-bold lg:text-5xl">Spotify Stats</h1>
              <p className="mb-8 text-xl text-gray-600">
                Dive deep into your music listening habits, discover your top
                tracks, artists, and get personalized insights about your Spotify
                journey.
              </p>
              <div className="flex justify-center space-x-4 md:justify-center lg:justify-start">
                <Button size="lg">Sign In</Button>
                <Button variant="outline" size="lg" className="hidden lg:inline-flex">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-8 w-full md:mt-12 lg:mt-0 lg:w-1/2">
              <Image
                src="/music.svg"
                height={500}
                width={500}
                alt="Music"
                className="mx-auto h-auto w-full max-w-[400px] lg:max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
