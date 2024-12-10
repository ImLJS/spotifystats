import { Button } from '@/components/ui/button';
import { SignIn } from '@/actions/auth-actions';

export function HeroTitle() {
  return (
    <div className="w-full text-center xl:w-1/2 xl:text-left">
      <h1 className="mb-4 text-4xl font-bold xl:text-5xl">Spotify Stats</h1>
      <p className="mb-8 text-xl text-gray-600">
        Dive deep into your music listening habits, discover your top tracks,
        artists, and get personalized insights about your Spotify journey.
      </p>
      <div className="flex justify-center space-x-4 xl:justify-start">
        <Button onClick={SignIn} size="lg">
          Sign In
        </Button>
      </div>
    </div>
  );
}
