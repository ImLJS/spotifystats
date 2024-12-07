import { auth } from '@/auth';

export async function spotifyApi(endpoint, options = {}) {
  const session = await auth();

  if (!session?.accessToken) {
    throw new Error('Not authenticated');
  }

  const response = await fetch(`https://api.spotify.com/v1${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${session.accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Spotify API error: ${response.statusText}`);
  }

  return response.json();
}

export async function getTopTracks(timeRange = 'medium_term', limit = 20) {
  return spotifyApi(`/me/top/tracks?time_range=${timeRange}&limit=${limit}`);
}

export async function getTopArtists(timeRange = 'medium_term', limit = 20) {
  return spotifyApi(`/me/top/artists?time_range=${timeRange}&limit=${limit}`);
}
