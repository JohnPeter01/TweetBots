var Twit = require('twit');

var config = require('./config')
var T = new Twit(config)

tweetIt();

function tweetIt() {
    var r = Math.floor(Math.random()*100);
    var tweet = {
        status: "Esse Tweet veio do Heroku! "
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log("Algo deu Errado.");
        } else {
            console.log("Deu tudo certo.");
        }
    }
}
