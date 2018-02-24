console.log("Hello");

var Twit = require('twit');

var config = require('./config')
var T = new Twit(config)

var params = {
    q: 'AMaquina',
    count: 1

}

T.get('search/tweets',params,getData);

function getData(err, data, response){
    var tweets = data.statuses;
    for(var i=0;i<tweets.length;i++){
        console.log(tweets[i].text);
    }
}
