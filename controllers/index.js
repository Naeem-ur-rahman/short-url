const URL = require('../models/url');

async function handleRedirectRequest(req, res) {
     const shortId = req.params.shortId;
     const entry = await URL.findOneAndUpdate({
          shortId
     },
          {
               $push: {
                    visitHistory: {
                         timestamp: Date.now(),
                    },
               },
          }
     );
     res.redirect(entry.redirectURL);
}

module.exports = {
     handleRedirectRequest,
}