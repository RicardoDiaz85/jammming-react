Here’s a structured **`TESTING.md`** document you can use for your manual tests:

---

# **Testing and Debugging for Jammming**

This document provides a comprehensive overview of the manual testing and debugging process for the Jammming React app. It includes test cases for key features, steps to reproduce, expected results, and actual outcomes.

---

## **Test Environment**

- **Browser**: Google Chrome (latest version)
- **Operating System**: macOS Ventura / Windows 11
- **React Version**: 18.x
- **Spotify API**: v1

---

## **Test Case Table**

| **Test ID** | **Test Case**                     | **Steps to Reproduce**                                                                                              | **Expected Result**                                                                                             | **Actual Result**        | **Status** |
|-------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|--------------------------|------------|
| TC-001      | Search for a Track               | Enter a valid song title in the search bar and click "SEARCH".                                                     | Tracks matching the query are displayed in the search results component.                                       | Works as expected.       | Pass       |
| TC-002      | Add Track to Playlist            | Click the "Add" button next to a track in the search results.                                                      | The track appears in the playlist component with the correct details.                                          | Works as expected.       | Pass       |
| TC-003      | Remove Track from Playlist       | Click the "Remove" button next to a track in the playlist.                                                         | The track is removed from the playlist component.                                                              | Works as expected.       | Pass       |
| TC-004      | Save Playlist to Spotify         | Create a playlist, give it a custom name, and click "Save to Spotify".                                             | The playlist is saved to the user's Spotify account with the correct name and tracks.                          | Works as expected.       | Pass       |
| TC-005      | Save Empty Playlist              | Click "Save to Spotify" without adding tracks to the playlist.                                                     | An alert appears: "Your playlist is empty!"                                                                    | Works as expected.       | Pass       |
| TC-006      | Invalid Search Query             | Enter random gibberish in the search bar and click "SEARCH".                                                       | No results are displayed, and an appropriate message like "No results found" is shown.                         | Works as expected.       | Pass       |
| TC-007      | Token Expiry Handling            | Allow the token to expire, then perform an action like "Save to Spotify".                                          | The app prompts the user to log in again or redirects to Spotify's login page.                                  | Works as expected.       | Pass       |
| TC-008      | API Error Handling               | Disconnect from the internet and perform an action like "Search for a Track".                                      | An error message like "Failed to connect to Spotify. Please check your connection." is displayed.               | Works as expected.       | Pass       |

---

## **Detailed Test Cases**

### **TC-001: Search for a Track**
- **Steps**:
  1. Open the app.
  2. Enter "Imagine" in the search bar.
  3. Click the "SEARCH" button.
- **Expected Result**:
  - Tracks with "Imagine" in their title, artist, or album are displayed.
- **Actual Result**:
  - [Add result here after testing].
- **Status**: Pass/Fail

---

### **TC-002: Add Track to Playlist**
- **Steps**:
  1. Perform a search for "Imagine".
  2. Click the "Add" button next to one of the tracks.
- **Expected Result**:
  - The track appears in the playlist with its name, artist, and album.
- **Actual Result**:
  - [Add result here after testing].
- **Status**: Pass/Fail

---

### **TC-003: Remove Track from Playlist**
- **Steps**:
  1. Add a track to the playlist.
  2. Click the "Remove" button next to the track in the playlist.
- **Expected Result**:
  - The track is removed from the playlist.
- **Actual Result**:
  - [Add result here after testing].
- **Status**: Pass/Fail

---

### **TC-004: Save Playlist to Spotify**
- **Steps**:
  1. Create a playlist by adding tracks and giving it a name.
  2. Click "Save to Spotify".
  3. Check the user's Spotify account for the playlist.
- **Expected Result**:
  - A new playlist appears in the user's Spotify account with the correct name and tracks.
- **Actual Result**:
  - [Add result here after testing].
- **Status**: Pass/Fail

---

### **TC-005: Save Empty Playlist**
- **Steps**:
  1. Ensure the playlist is empty.
  2. Click "Save to Spotify".
- **Expected Result**:
  - An alert appears with the message "Your playlist is empty!".
- **Actual Result**:
  - [Add result here after testing].
- **Status**: Pass/Fail

---

### **TC-008: API Error Handling**
- **Steps**:
  1. Disconnect from the internet.
  2. Perform a search or try saving a playlist.
- **Expected Result**:
  - An error message appears indicating a failed connection.
- **Actual Result**:
  - [Add result here after testing].
- **Status**: Pass/Fail

---

## **Debugging Notes**

### **Common Debugging Scenarios**
1. **Issue**: Playlist fails to save to Spotify.
   - **Cause**: Token expired or invalid.
   - **Solution**: Log in again and refresh the token.

2. **Issue**: Search results not displaying.
   - **Cause**: API request failed due to invalid query or expired token.
   - **Solution**: Check `console.log` for query and response.

### **Tools Used**
- **React Developer Tools**: Inspected state and props for components.
- **Chrome DevTools**: Monitored network requests to the Spotify API.
