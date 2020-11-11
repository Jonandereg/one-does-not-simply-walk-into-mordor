const BASE_URL = "http://localhost:3001/";

const fetchRequest = (options) => {
  return fetch(`${BASE_URL}`, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => {
      console.log(err);
    });
};

export const postMoves = (body) => {
  return fetchRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
