import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

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

const SPOTIFY_AUTHORIZATION_URL =
  'https://accounts.spotify.com/authorize?' +
  new URLSearchParams({
    scope: spotifyScopes,
  });

const options = {
  providers: [
    SpotifyProvider({
      clientId: process.env.AUTH_SPOTIFY_ID ?? '',
      clientSecret: process.env.AUTH_SPOTIFY_SECRET ?? '',
      authorization: SPOTIFY_AUTHORIZATION_URL,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};

export const { handlers, auth, signIn, signOut } = NextAuth(options);
