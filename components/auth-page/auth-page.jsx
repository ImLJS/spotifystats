import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ModeToggle } from '../dark-mode/mode-toggle';
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
      <main className="flex flex-grow flex-col items-center justify-center p-4 md:flex-row">
        {/* Content for Mobile */}
        <div className="flex w-full flex-col items-center px-4 lg:hidden">
          <div className="mb-8 mt-10 text-center">
            <h1 className="mb-4 text-4xl font-bold">Spotify Stats</h1>
            <p className="mb-8 text-xl text-gray-600">
              Dive deep into your music listening habits, discover your top
              tracks, artists, and get personalized insights about your Spotify
              journey.
            </p>
            <div className="mb-8">
              <Button size="lg">Sign In</Button>
            </div>
          </div>

          {/* Image for Mobile */}
          <div className="flex w-full justify-center md:hidden">
            <Image src="/music.svg" height={200} width={200} alt="Music" />
          </div>
          {/* Image for Tabs like Ipad */}
          <div className="hidden md:flex md:w-full md:justify-center">
            <Image src="/music.svg" height={400} width={400} alt="Music" />
          </div>
        </div>

        {/* Content for Desktop */}
        <div className="hidden w-full max-w-6xl items-center justify-center md:flex-row lg:flex">
          <div className="text-left md:w-1/2 md:pr-12">
            <h1 className="mb-4 text-5xl font-bold">Spotify Stats</h1>
            <p className="mb-8 text-xl text-gray-600">
              Dive deep into your music listening habits, discover your top
              tracks, artists, and get personalized insights about your Spotify
              journey.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">Sign In</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src="/music.svg" height={500} width={500} alt="Music" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
