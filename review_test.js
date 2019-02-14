var gplay = require('google-play-scraper');

var shit=[];
gplay.reviews({
  appId: 'in.scroll.android',
  page: 1,
  sort: gplay.sort.RATING
}).then(function(response){
	shit=shit.concat(response);
	console.log(JSON.stringify(shit));
	
});
// }).then(console.log, console.log);