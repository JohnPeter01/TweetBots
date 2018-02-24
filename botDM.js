console.log("O bot de Seguir.");

var Twit = require('twit');

var config = require('./config')
var T = new Twit(config)

var stream = T.stream('user');

stream.on('follow',floowed);

function floowed(event){
    console.log("Alguem te Seguiu.")
    var name = event.source.name;
    var screenName = event.source.screen_name;
    tweetIt('@'+screenName+' Obrigado por me seguir.');

}

function tweetIt(txt) {
    var tweet = {
        status: txt
    }

    T.post('direct_messages/new', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log("Algo deu Errado.");
        } else {
            console.log("Deu tudo certo.");
        }
    }
}
