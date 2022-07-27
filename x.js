const axios = require("axios");

const fs = require("fs");
const mockData = fs.readFileSync("./test/fixture/mock.json");
const mockArray = JSON.parse(mockData);

(async () => {
  mockArray.forEach(async (d) => {
      try {
        d.password = 'Three.1415';
        d.about='Hello everyone, I love codinh new stuffs! Check out this user management system.'
      const response = await axios.post(
        "https://oceanbin.herokuapp.com/api/register",
        d,
        {
          withCredentials: false,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.status);
    } catch (error) {}
  });
})();
