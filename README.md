
# **Jammming - React Web App**

## **Purpose**
Jammming is a React-based web application that allows users to:
- Search Spotify's vast music catalog.
- Create custom playlists.
- Save those playlists directly to their Spotify account.

This project demonstrates front-end development with React, API integration, and state management.

---

## **Technologies Used**
- **React**: Front-end library for building user interfaces.
- **Spotify API**: Enables song search and playlist management.
- **JavaScript (ES6+)**: Provides the logic and functionality.
- **CSS Modules**: Scoped styling for components.
- **Git & GitHub**: Version control and collaboration tools.

---

## **Features**
- **Search Spotify Library**: Users can search for songs by title, artist, album, or genre.
- **Create Custom Playlists**: Add tracks to a playlist and customize its name.
- **Save to Spotify**: Save playlists directly to a user's Spotify account.
- **Responsive Design**: Works across desktop and mobile devices.

---

## **Future Enhancements**
- **Authentication Flow**: Improve login experience with better token handling.
- **Error Handling**: Provide detailed messages for API errors (e.g., invalid search terms or token expiry).
- **Advanced Playlist Management**: Reorder tracks, edit playlist details, or remove tracks from a playlist.
- **UI Improvements**: Enhance styling and animations for a more polished experience.

---

## **How to Run the App Locally**

### **Prerequisites**
- Node.js installed on your computer.
- Spotify Developer Account.

### **Steps**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/RicardoDiaz85/jammming-react.git
   cd jammming-react
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   The app will open in your browser at [http://localhost:3000](http://localhost:3000).

4. **Set up your Spotify Developer account**:
   - Register an app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
   - Copy your `Client ID` and update your `SpotifyAuth.js` file with it.
   - Add `http://localhost:3000` to your Redirect URI in the dashboard settings.

5. **Build for Production**:
   To create a production-ready build:
   ```bash
   npm run build
   ```

---

## **Testing and Debugging**
- **Manual Testing**:
  - Test features such as searching tracks, adding/removing tracks from the playlist, and saving playlists to Spotify.
- **Debugging**:
  - Use browser developer tools and React Developer Tools to inspect state and props.
  - Check network requests in the browser's "Network" tab for Spotify API interactions.

---

## **Acknowledgments**
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). For more information on available scripts, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

---

## **Available Scripts**

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when changes are made.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See more about [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`
Builds the app for production to the `build` folder.\
It optimizes the build for best performance, producing a minified and ready-to-deploy app.

### `npm run eject`
Removes the single build dependency and copies the configuration files for full customization.\
**Note**: This is a one-way operation. Once you `eject`, you can’t revert.

---

### **Next Steps**
- Deploy the app using platforms like **Netlify**, **Vercel**, or **GitHub Pages**.
- Update the Spotify Developer Dashboard with your production URL for redirect URIs.

---

Let me know if you need any additional edits or guidance! 😊