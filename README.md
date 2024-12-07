# Spotifystats

Spotifystats is a web application that provides insights and statistics about your Spotify listening habits. It leverages the Spotify API to fetch data about your top tracks, artists, and playlists.

## Features

- View your top tracks and artists over different time ranges.
- See detailed information about your listening habits.
- Share your favorite tracks and playlists with friends.

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Radix UI**: Accessible and customizable UI components.
- **NextAuth.js**: Authentication for Next.js applications.
- **Spotify API**: Fetch data about user's Spotify account.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Spotify Developer account

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/yourusername/spotifystats.git
  ```
2. Navigate to the project directory:
  ```sh
  cd spotifystats
  ```
3. Install dependencies:
  ```sh
  npm install
  ```
  or
  ```sh
  yarn install
  ```

### Configuration

1. Create a `.env.local` file in the root of the project and add your Spotify API credentials:
  ```env
  AUTH_SPOTIFY_ID=your_spotify_client_id
  AUTH_SPOTIFY_SECRET=your_spotify_client_secret
  ```

### Running the Application

1. Start the development server:
  ```sh
  npm run dev
  ```
  or
  ```sh
  yarn dev
  ```
2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `components/`: Reusable UI components.
- `lib/`: Utility functions and API wrappers.
- `pages/`: Next.js pages.
- `public/`: Static assets.
- `styles/`: Global styles.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Spotify API](https://developer.spotify.com/documentation/web-api/)
