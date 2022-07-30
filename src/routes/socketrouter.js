const express = require("express");
const axios = require("axios");

function sockerRouter(io) {
  const router = express.Router();

  router.get("/flights", async (req, res) => {
    try {
      let options = {
        method: "get",
        url: `http://api.aviationstack.com/v1/flights?access_key=48a294515c79a3eac5036a83cb093a49`,
      };
      let result = await axios(options);
      let data = result.data.data;
      let planedetails = data.filter((flight) => {
        console.log(
          `${flight["airline"]["name"]} flight ${flight["flight"]["iata"]}`,
          `from ${flight["departure"]["airport"]} (${flight["departure"]["iata"]})`,
          `to ${flight["arrival"]["airport"]} (${flight["arrival"]["iata"]}) is in the air.`
        );
      });
      console.log(planedetails);

      return res.status(200).send({ result: data, status: true });
    } catch (err) {
      return res.status(500).send({ msg: err.message });
    }
  });

  router.get("/airports", async (req, res) => {
    try {
      let options = {
        method: "get",
        url: `http://api.aviationstack.com/v1/flights?access_key=48a294515c79a3eac5036a83cb093a49`,
      };
      let result = await axios(options);
      let data = result.data.data;
      return res.status(200).send({ result: data, status: true });
    } catch (err) {
      return res.status(500).send({ msg: err.message });
    }
  });

  router.get("/airlines", async (req, res) => {
    try {
      let options = {
        method: "get",
        url: `http://api.aviationstack.com/v1/airlines?access_key=48a294515c79a3eac5036a83cb093a49`,
      };
      let result = await axios(options);
      let data = result.data.data;
      return res.status(200).send({ result: data, status: true });
    } catch (err) {
      return res.status(500).send({ msg: err.message });
    }
  });

  return router;
}

module.exports = sockerRouter;
