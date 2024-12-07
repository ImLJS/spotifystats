import { SignInButton } from '@/components/sign-in-button';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-6 text-4xl font-bold text-green-500">
          Spotify Insights
        </h1>

        <div className="mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 300"
            className="mx-auto mb-6 rounded-lg shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 300"
              className="mx-auto mb-6 rounded-lg shadow-lg"
            >
              {/* Background */}
              <rect width="400" height="300" fill="#1DB954" />

              {/* Sound Waves */}
              <g transform="translate(200, 150)">
                {/* Center Circle */}
                <circle cx="0" cy="0" r="50" fill="white" />

                {/* Sound Wave Arcs */}
                <g opacity="0.6">
                  <path
                    d="M-100,0 Q-50,-50 0,0 T100,0"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="10,10"
                  />
                  <path
                    d="M-150,0 Q-100,-75 0,0 T150,0"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="15,15"
                    opacity="0.7"
                  />
                  <path
                    d="M-200,0 Q-150,-100 0,0 T200,0"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="20,20"
                    opacity="0.5"
                  />
                </g>

                {/* Music Note */}
                <path
                  d="M-20,-30 Q0,-40 20,-30 L20,30 Q10,35 0,30 Q-10,25 -20,30 Z"
                  fill="black"
                  opacity="0.7"
                />
              </g>

              {/* Decorative Circles */}
              <circle cx="50" cy="50" r="20" fill="white" opacity="0.3" />
              <circle cx="350" cy="250" r="15" fill="white" opacity="0.3" />
            </svg>
          </svg>
        </div>

        <p className="mb-8 text-lg text-gray-300">
          Unlock deeper insights into your music listening habits. Connect your
          Spotify account to discover personalized statistics and trends.
        </p>

        <SignInButton />

        <div className="mt-6 text-sm text-gray-400">
          <p>By signing in, you&apos;ll get access to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-left">
            <li>Your top tracks and artists</li>
            <li>Listening history analysis</li>
            <li>Personalized music insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
