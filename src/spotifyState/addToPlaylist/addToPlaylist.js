const addToPlaylist = (accessToken, playlistID, uris) => {
  Promise.resolve(uris).then((data) => {
    const songs = data.filter((songs) => songs !== undefined);
    fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify({
        uris: songs,
      }),
    })
      .then((data) => data.json())
      .then((data) => data)
      .catch((error) => console.log(error));
  });
};

export default addToPlaylist;
