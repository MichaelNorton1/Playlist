const getTrackUris = (accessToken, setlist) => {
  let playlist = [];

  setlist[0].set.forEach((element) => {
    const format = element.replace(" ", "%20");

    let x = fetch(
      `https://api.spotify.com/v1/search?q=${format}%20artist:${setlist[0].band}&type=track`,
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.tracks.items.length > 0) {
          return data.tracks.items[0].uri;
        }
      });

    playlist.push(x);
  });

  return Promise.all(playlist);
};

export default getTrackUris;
