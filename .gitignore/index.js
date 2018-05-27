const discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("!")
var randnum = 0;
var prenom = (" ");

bot.login("token");

bot.on('ready', function() {
    console.log("Connected");
});

bot.on('message', message => {


    if(message.content.startsWith(prefix + "love")){
        random();
    if(message.author.id == "339131189791031297" || message.author.id == "198046346798825472" || message.author.id == "272724654102282240"){
        
        if(message.author.id == "198046346798825472"){
            prenom = ("Miss YukiHime");
        }
        
        if(message.author.id == "339131189791031297"){
            prenom = ("Maëva");
        }

        if(message.author.id == "272724654102282240"){
            prenom = ("Lionel");
        }

        if (randnum == 1){
            message.channel.send(prenom + ", Je pense constamment à toi ! ton image est gravée pour toujours dans mon cœur. Aujourd'hui, je me trouve à la place où tu marchais hier, et je cherche sur le sable la trace de tes pas. ")
            console.log(randnum)
        }

        if (randnum == 2){
            message.channel.send(prenom + ", je t'aime mon bien-aimé ; mon seul but, ma seule ambition, mon seul présent et mon seul avenir, c'est mon amour. Je ne vis que dans lui, je ne pense que par lui, je ne sens que lui. J'ai hâte de te voir ! j'ai tant de baisers, tant d'étreintes, tant d'amour à te donner, que tu devrais te presser d'arriver pour ne pas les laisser sans bouche pour les recevoir, sans mains pour les sentir et sans oreilles pour les entendre. Je t'aime, je t'aime toujours plus. ")
            console.log(randnum)
        }

        if (randnum == 3){
            message.channel.send(prenom + ", Je ne peux imaginer la vie Sans ta présence auprès de moi, Sans la tendresse de tes paroles Et la douceur de tes doigts.Je ne peux imaginer la vie, Sans ton sourire pour illuminer mes jours, Sans ton amour pour réchauffer mes nuits. Je ne peux imaginer le vie sans toi, Car mon bonheur, c'est à toi que je le dois. Je t'aime... ")
            console.log(randnum)
        }

        if (randnum == 4){
            message.channel.send(prenom + ", Je t'aime ! Ce mot-là bat dans mes veines, dans mes tempes et dans mon cœur en même temps que mon sang. Le jour où je cesserai de t'aimer, je cesserai de vivre. Mais tant que mon âme durera, elle continuera de t'aimer quelque part qu'elle soit, enfer ou paradis.")
            console.log(randnum)
        }

        if (randnum == 5){
            message.channel.send(prenom + ", Mon adorée, pour nous, vieillir, c'est rajeunir ; nos cœurs se renouvellent et recommencent. Sous nos cheveux blancs, nous avons un amour Printemps. Je t'aime ! Tu es l'ange, tu es la femme, tu es la vie, tu es l'âme dont j'ai toujours rêvé. Mon cœur est à toi, mon cœur est avec toi. Je t'embrasse, je te veux et je te possède, tu es l'avenir de mon espérance. Tu es plus que mon bonheur, tu es ma vie, je t'aime.")
            console.log(randnum)
        }

        if (randnum == 6){
            message.channel.send(prenom + ", Mon amour, j'ai besoin de l'air que tu respires comme de la seule atmosphère où je puisse vivre. Sache que je n'ai de bonheur que dans l'espoir du tien, et que je n'ai de plaisir que sûr de ton plaisir. Tu es seule le but de mon existence, l'entière occupation de ma pensée. Vivre avec toi, longtemps, toujours, te consacrer tout ce que je suis, tout ce que je vaux, est mon unique projet pour les années à venir. Mon ange, ma douce et belle, tout ce que j'apprécie dans la vie est en toi, et chaque goutte de mon sang ne coule que pour toi seule. Je t'aime. ")
            console.log(randnum)
        }

        if (randnum == 7){
            message.channel.send(prenom + ", J’espère qu’un jour, ton regard se posera sur moi, et tu me remarqueras enfin, alors plus rien ne compteras à part toi. Dis-moi si je peux espérer être avec toi? A toi de voir, mais sache que je tien beaucoup a toi.")
            console.log(randnum)
        }

        if (randnum == 8){
            message.channel.send(prenom + ", Dans ma vie, depuis que je t’ai rencontré, mon cœur bat très fort pour toi et ma vie s’est soudainement illuminée d’amour, j’aimerai que tu réalises tout l’amour que je porte pour toi. Je t’aime à la folie…")
            console.log(randnum)
        }

        if (randnum == 9){
            message.channel.send(prenom + ", Depuis notre rencontre, je ne cesse de penser à toi, ton visage se projette  tous le temps dans ma tête, quand je suis avec toi je n’arrive pas à t’avouer mes sentiments, mais aujourd’hui, par ce message je te déclare mon amour dans l’espoir qu’ils soient réciproques. Je t’aime…")
            console.log(randnum)
        }

        if (randnum == 10){
            message.channel.send(prenom + ", Devant tout le monde comme témoins je te déclare mon amour, je t’aime et je t’aimerai pour toujours.")
            console.log(randnum)
        }
    }else{
        return message.reply(":comet: Vous n'avez pas la permission de faire cette commande. Seul mon créateur le peut.");
        }
    }
    
});  

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(11)
    randnum = Math.floor(Math.random() * (max - min +1)  +min);
}
