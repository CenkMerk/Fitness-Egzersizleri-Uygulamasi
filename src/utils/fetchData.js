export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b30c4f2f74mshd47359931667f53p13773ajsnd80aa9ee0b39",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b30c4f2f74mshd47359931667f53p13773ajsnd80aa9ee0b39",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
