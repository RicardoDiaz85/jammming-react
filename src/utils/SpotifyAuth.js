let accessToken; // Declare accessToken at a higher scope so it persists

const clientId = process.env.REACT_APP_CLIENT_ID || "aad34981898a496ebb6c3889e5644736"; // Fallback Client ID
const redirectUri = process.env.REACT_APP_REDIRECT_URI || "http://localhost:3000"; // Fallback Redirect URI
const scopes = ["playlist-modify-public", "playlist-modify-private"];

// Warn if environment variables are missing
if (!process.env.REACT_APP_CLIENT_ID) {
  console.warn("Warning: REACT_APP_CLIENT_ID is not set. Using fallback Client ID.");
}

if (!process.env.REACT_APP_REDIRECT_URI) {
  console.warn("Warning: REACT_APP_REDIRECT_URI is not set. Using fallback Redirect URI.");
}

// Construct the authorization URL
export const getAuthUrl = () => {
  if (!clientId) {
    throw new Error("Spotify Client ID is missing!");
  }
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

    // Notify before token expiration
    window.setTimeout(() => {
      alert("Your session is about to expire. Please log in again.");
      accessToken = "";
      window.location.href = getAuthUrl();
    }, (expiresIn - 60) * 1000); // Notify 1 minute before expiration

    // Remove token from the URL
    const newUrl = window.location.origin + window.location.pathname;
    window.history.pushState("Access Token", null, newUrl);

    return accessToken;
  } else {
    // Redirect to Spotify for login if no token is found
    window.location.href = getAuthUrl();
  }
};

// Other Spotify API functions (search, getUserId, etc.) remain unchanged
