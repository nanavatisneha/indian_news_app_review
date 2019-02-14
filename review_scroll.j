var gplay = require('google-play-scraper');

gplay.reviews({
  appId: 'in.scroll.android',
  page: (0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15),
  sort: gplay.sort.RATING
}).then(console.log, console.log);