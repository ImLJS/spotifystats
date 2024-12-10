import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

// Spotify scopes
export const spotifyScopes = [
  'user-read-recently-played',
  'user-top-read',
  'user-read-playback-position',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private',
  'user-library-read',
  'user-library-modify',
  'user-read-email',
  'user-read-private',
  'user-follow-read',
  'user-follow-modify',
].join(' ');

// Spotify authorization URL
const SPOTIFY_AUTHORIZATION_URL =
  'https://accounts.spotify.com/authorize?' +
  new URLSearchParams({
    scope: spotifyScopes,
  });

// Refresh token function
async function refreshSpotifyToken(refreshToken) {
  const basicAuth = Buffer.from(
    `${process.env.AUTH_SPOTIFY_ID}:${process.env.AUTH_SPOTIFY_SECRET}`
  ).toString('base64');

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    });

    const tokens = await response.json();

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    return {
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token || refreshToken,
      expiresAt: Date.now() + (tokens.expires_in * 1000),
    };
  } catch (error) {
    console.error('Token refresh error:', error);
    throw error;
  }
}

// NextAuth configuration
const options = {
  providers: [
    SpotifyProvider({
      clientId: process.env.AUTH_SPOTIFY_ID ?? '',
      clientSecret: process.env.AUTH_SPOTIFY_SECRET ?? '',
      authorization: SPOTIFY_AUTHORIZATION_URL,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {

      // If no account, return existing token
      if (!account) {
        return token;
      }
      
      // Initial login - store tokens and user info
      if (account && profile) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          expiresAt: Date.now() + (account.expires_in * 1000),
          name: profile.display_name,
          email: profile.email,
          image: profile.images?.[0]?.url,
          spotifyId: profile.id,
        };
      }

      // Check if token needs refresh
      if (Date.now() < (token.expiresAt - 5 * 60 * 1000)) {
        return token;
      }

      // Refresh token
      try {
        const refreshedTokens = await refreshSpotifyToken(token.refreshToken);
        
        return {
          ...token,
          accessToken: refreshedTokens.accessToken,
          refreshToken: refreshedTokens.refreshToken,
          expiresAt: refreshedTokens.expiresAt,
        };
      } catch (error) {
        return token;
      }
    },
    async session({ session, token }) {
      
      // More robust session handling
      if (token.name) {
        session.user = {
          name: token.name,
          email: token.email,
          image: token.image,
          spotifyId: token.spotifyId,
        };
      }

      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      return session;
    },
  },
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === 'development',
};

export const { handlers, auth, signIn, signOut } = NextAuth(options);
