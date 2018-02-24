console.log("Hello");

var Twit = require('twit');
var fs = require('fs');
var config = require('./config')

var T = new Twit(config)

tweetIt();
function tweetIt() {
    processing();
    function processing(){
        var filename ='maquina.jpg';
        var params = {encoding:'base64'}
        var b64 = fs.readFileSync(filename,params);

        T.post('media/upload',{ media_data: b64},uploaded);

        function uploaded(err,data,response){
            var id = data.media_id_string;
            var tweet = {
                status: 'AMaquinha e o poder',
                media_ids: [id]
            }
            T.post('statuses/update',tweet,tweeted);
        }
        function tweeted(err,data,response){
            if(err){
                console.log("Algo deu errado.")
            }else{
                console.log("Deu certo!")
            }
        }
    }

}
