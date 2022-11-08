const express = require('express');
const router = express.Router();
const Shorten = require('../models/shorten');
const shortenController = require('../controllers/shortenController');

router.get('/su/:short_code', shortenController.get_url);

router.post('/api/shorten_url', shortenController.shorten_url);

// router.patch('/update_url/:id', async (req, res) => {
//     try {
//         const shortenUrl = await Shorten.updateOne({ _id: req.params.shortenId}, {
//             $set: {
//                 url: req.body.url,
//                 shorten_code: req.body.shorten_code,
//                 updated_at: Date.now
//             }
//         });
//         res.json({message: "URL updated"});
//     } catch (err) {
//         res.json({message: err});
//     }
// });

// router.delete('/delete_url/:id', async (req, res) => {
//     try {
//         const shortenUrl = await Shorten.remove({ _id: req.params.shortenId});
//         res.json({message: "URL deleted"});
//     } catch (err) {
//         res.json({message: err});
//     }
// });


module.exports = router;