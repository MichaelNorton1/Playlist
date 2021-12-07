const createPlaylist = (data, accessToken, band) => {
  let x = fetch(`https://api.spotify.com/v1/users/${data}/playlists`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({
      name: `${band[0].band} Setlist`,
      description: `Created by Make my Concert`,
      public: true,
    }),
  })
    .then((data) => data.json())
    .then((data) => data.id);
  return Promise.resolve(x);
};

export default createPlaylist;
