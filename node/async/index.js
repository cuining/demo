const async = require('async');

const urls = [];
for (let i = 0; i < 30; i++) {
  urls.push('http://datasource_' + i);
}

let concurrencyCount = 0;
const fetchUrl = (url, callback) => {
  const delay = parseInt(Math.random() * 1000, 10);
  concurrencyCount++;
  console.log(
    `concurrencyCount：${concurrencyCount}, url: ${url}, delay: ${delay} milliseconds`
  );
  setTimeout(
    function() {
      concurrencyCount--;
      callback(null, url + ' html content');
    },
    delay
  );
};

async.mapLimit(
  urls,
  5,
  (url, callback) => {
    fetchUrl(url, callback);
  },
  (err, result) => {
    console.log(result);
  }
);
