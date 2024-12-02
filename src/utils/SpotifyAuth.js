let accessToken; // Declare accessToken at a higher scope so it persists

const clientId = process.env.REACT_APP_CLIENT_ID; // Environment Variables for Sensitive Data Store the clientId and redirectUri in environment variables
const redirectUri = process.env.REACT_APP_REDIRECT_URI || "http://localhost:3000"; // environment variables to dynamically assign the redirectUri depending on the environment (local vs. production)
const scopes = ["playlist-modify-public", "playlist-modify-private"];

// Construct the authorization URL
export const getAuthUrl = () => {
  return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scopes.join(" "))}`;
};

// Function to parse the access token
export const getAccessToken = () => {
  if (accessToken) {
    return accessToken; // Return the token if it's already available
  }

  // Extract token from URL fragment
  const url = window.location.href;
  const tokenMatch = url.match(/access_token=([^&]*)/);
  const expiresMatch = url.match(/expires_in=([^&]*)/);

  if (tokenMatch && expiresMatch) {
    accessToken = tokenMatch[1]; // Extract access token
    const expiresIn = Number(expiresMatch[1]); // Extract expiration time

    // Handle Token Expiration Automatically reauthenticate after the token expires:
    window.setTimeout(() => {
        accessToken = "";
        window.location.href = getAuthUrl();
    }, expiresIn * 1000);
      

    // Remove token from the URL Access Token URL Cleanup Ensure you don’t overwrite the current path:
    const newUrl = window.location.pathname;
    window.history.pushState("Access Token", null, newUrl); //changed "/" for newUrl


    return accessToken;
  } else {
    // Redirect to Spotify for login if no token is found
    window.location.href = getAuthUrl();
  }
};

// Add a searchSpotify function that makes the search request using the /v1/search endpoint.
export const searchSpotify = async (query, accessToken) => {
  if (!accessToken) {
    throw new Error("Access token is required for Spotify search");
  }

  const url = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(
    query
  )}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Spotify search failed: ${response.statusText}`);
  }

  const data = await response.json();

  // Convert JSON response to an array of track objects
  const tracks = data.tracks.items.map((item) => ({
    id: item.id,
    name: item.name,
    artist: item.artists[0].name,
    album: item.album.name,
    uri: item.uri,
  }));

  return tracks;
};

// Function to get the current user's Spotify ID
export const getUserId = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user ID");
  }

  const data = await response.json();
  return data.id; // Returns the user's Spotify ID
};

// Function to create a new playlist
export const createPlaylist = async (userId, playlistName, accessToken) => {
  const response = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playlistName,
        description: "Created using Jammming",
        public: false, // Set to `true` if you want the playlist to be public
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create playlist");
  }

  const data = await response.json();
  return data.id; // Returns the newly created playlist ID
};

// Function to add tracks to the playlist
export const addTracksToPlaylist = async (
  playlistId,
  trackUris,
  accessToken
) => {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: trackUris,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add tracks to playlist");
  }

  return response.json();
};
