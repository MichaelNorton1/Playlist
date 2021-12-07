const getUserId = (setData, token) => {
  fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: "Bearer " + token },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.id) {
        setData(data.id);
      }
    })
    .catch((error) => console.log(error));
};

export default getUserId;
