let accessToken; // Declare accessToken at a higher scope so it persists

const clientId = 'aad34981898a496ebb6c3889e5644736'; // Replace with your actual Client ID
const redirectUri = 'http://localhost:3000'; // Your redirect URI
const scopes = [
    'playlist-modify-public',
    'playlist-modify-private',
];

// Construct the authorization URL
export const getAuthUrl = () => {
    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}`;
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

        // Clear the token after it expires
        window.setTimeout(() => (accessToken = ''), expiresIn * 1000);

        // Remove token from the URL
        window.history.pushState('Access Token', null, '/');

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

    const url = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(query)}`;

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