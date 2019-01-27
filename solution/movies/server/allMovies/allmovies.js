const axios = require("axios");
require("dotenv").config();

getAllData = async () => {
  const allPages = [];
  let call;
  const promise = await Promise.all([
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        process.env.API_KEY
      }`
    )
  ]);
  console.log("promise ===>", promise[0].data.total_pages);
  const nop = promise[0].data.total_pages;

  for (let i = 1; i <= 39; i++) {
    call = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        process.env.API_KEY
      }&language=en-US&page=${i}`
    );

    allPages.push(call.data);
  }

  console.log("allPages==>", allPages);
  return allPages;
};

module.exports.allData = getAllData;
