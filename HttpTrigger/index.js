const axios = require("axios");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let res = await axios.get("https://api.darksky.net/forecast/3ac036c93fab776bb5ae3f1451070a1a/47.639880,-122.124380");
    
    context.res = {
        status: 200,
        body: res.data
    };
    
};