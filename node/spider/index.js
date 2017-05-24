const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const url = require('url');
const app = express();

const cnodeUrl = 'https://cnodejs.org/';
app.get('/', function(req, res, next) {
  axios
    .get(cnodeUrl)
    .then(response => {
      const $ = cheerio.load(response.data);
      const items = [];
      $('#topic_list .topic_title').each((i, elm) => {
        items.push(url.resolve(cnodeUrl, $(elm).attr('href')));
      });

      const request = items.map(topic_url => axios.get(topic_url));
      axios.all([request[0], request[1]]).then(
        axios.spread((...result) => {
          const topics = result.map(r => {
            const $ = cheerio.load(r.data);

            return {
              title: $('.topic_full_title').text().trim(),
              comment1: $('.reply_content').eq(0).text().trim()
            };
          });
          res.send(topics)
        })
      );
    })
    .catch(err => next(err));
});

app.listen(3000, function() {
  console.log('app is listening at port 3000');
});
