import { Clock, LogOut, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { signOut } from '@/auth';
import { getTopArtists, getTopTracks } from '@/lib/spotify';

function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60_000);
  const seconds = ((millis % 60_000) / 1000).toFixed(0);
  return `${minutes}:${Number.parseInt(seconds) < 10 ? '0' : ''}${seconds}`;
}

export default async function DashboardPage() {
  const [tracksData, artistsData] = await Promise.all([
    getTopTracks('medium_term', 20),
    getTopArtists('medium_term', 20),
  ]);

  const tracks = tracksData.items;
  const artists = artistsData.items;

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      {/* Header with Sign Out */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Your Spotify Insights</h1>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button
            type="submit"
            className="group flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
          >
            <LogOut className="h-5 w-5 transition-transform group-hover:rotate-6" />
            Sign Out
          </button>
        </form>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Tracks Section */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-green-500">Top Tracks</h2>

          <div className="grid grid-cols-1 gap-4">
            {/* Header */}
            <div className="grid grid-cols-[auto,1fr,1fr,auto] gap-4 border-b border-gray-800 px-4 py-2 text-gray-400">
              <div className="w-8">#</div>
              <div>Title</div>
              <div>Album</div>
              <div className="flex items-center">
                <Clock className="h-4 w-4" />
              </div>
            </div>

            {/* Tracks */}
            {tracks.map((track, index) => (
              <Link
                href={track.external_urls.spotify}
                target="_blank"
                key={track.id}
                className="group grid grid-cols-[auto,1fr,1fr,auto] gap-4 rounded-lg px-4 py-2 transition-colors hover:bg-white/10"
              >
                {/* Track Number */}
                <div className="flex w-8 items-center text-gray-400">
                  <span className="group-hover:hidden">{index + 1}</span>
                  <Play className="hidden h-4 w-4 group-hover:block" />
                </div>

                {/* Title and Artist */}
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10 flex-shrink-0">
                    <Image
                      src={track.album.images[0]?.url}
                      alt={track.album.name}
                      width={64}
                      height={64}
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-white">{track.name}</div>
                    <div className="truncate text-sm text-gray-400">
                      {track.artists.map(a => a.name).join(', ')}
                    </div>
                  </div>
                </div>

                {/* Album */}
                <div className="flex items-center truncate text-gray-400">
                  {track.album.name}
                </div>

                {/* Duration */}
                <div className="flex items-center text-gray-400">
                  {millisToMinutesAndSeconds(track.duration_ms)}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Artists Section */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-green-500">
            Top Artists
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {artists.map((artist, index) => (
              <Link
                href={artist.external_urls.spotify}
                target="_blank"
                key={artist.id}
                className="group flex items-center gap-4 rounded-lg px-4 py-2 transition-colors hover:bg-white/10"
              >
                {/* Artist Number */}
                <div className="w-8 text-right text-gray-400">{index + 1}</div>

                {/* Artist Image */}
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={artist.images[0]?.url}
                    alt={artist.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Artist Name and Genres */}
                <div className="min-w-0 flex-grow">
                  <div className="truncate text-white">{artist.name}</div>
                  <div className="truncate text-sm text-gray-400">
                    {artist.genres.slice(0, 2).join(', ')}
                  </div>
                </div>

                {/* Followers */}
                <div className="text-sm text-gray-400">
                  {artist.followers.total.toLocaleString()} followers
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Add loading state
export const revalidate = 3600; // Revalidate every hour
