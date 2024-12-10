import Image from 'next/image';
import SpotifyButton from './auth-button';

const AuthPage = () => {
  return (
    <>
      {/* Main Content */}
      <main className="flex flex-grow flex-col items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Content Section */}
          <div className="flex flex-col items-center space-y-8 md:flex-col xl:flex-row xl:space-x-12 xl:space-y-0">
            <div className="w-full text-center xl:w-1/2 xl:text-left">
              <h1 className="mb-4 text-4xl font-bold xl:text-5xl">
                Spotify Stats
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                Dive deep into your music listening habits, discover your top
                tracks, artists, and get personalized insights about your
                Spotify journey.
              </p>
              <div className="flex justify-center space-x-4 xl:justify-start">
                <SpotifyButton size="lg">Sign In</SpotifyButton>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:max-w-[500px] xl:w-1/2">
              <Image
                src="/music.svg"
                height={500}
                width={500}
                alt="Music"
                className="mx-auto h-auto w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthPage;
