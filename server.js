// importo il modulo http
const http = require("http"); 

// importo la libreria dotenv
const dotenv = require("dotenv");
dotenv.config();

// definiamo la porta
const port = +process.env.PORT || 3000;

// funzione frase casuale
let sentinella ;

function randomFrase(){
    const frasi = [
        "E HO GUARDATO DENTRO UN'EMOZIONE, E CI HO VISTO DENTRO TANTO AMORE, CHE HO CAPITO PERCHÉ NON SI COMANDA AL CUORE.",
        "TI VOGLIO BENE, SMETTI DI GIOCARE! TI VOGLIO BENE, A UN CERTO PUNTO TI DEVI “DARE”! TI VOGLIO BENE, NON PUOI FARTI ETERNAMENTE CORTEGGIARE!",
        "UNA CANZONE PER TE, NON TE L'ASPETTAVI, EH! INVECE ECCOLA QUA, COME MI È VENUTA, E CHI LO SA? LE MIE CANZONI NASCONO DA SOLE, VENGONO FUORI GIÀ CON LE PAROLE",
        "SEI UN' INCREDIBILE ROMANTICA, UN PO' NEVROTICA MA NON PATETICA CERTO UNICA.",
        "LA VITA NON È FACILE, MA A VOLTE BASTA UN COMPLICE E TUTTO È GIÀ PIÙ SEMPLICE",
        "VOGLIO UNA VITA, CHE NON È MAI TARDI, DI QUELLE CHE NON DORMI MAI! VOGLIO UNA VITA… LA VOGLIO PIENA DI GUAI!!"
    ];
    const randomNumber = Math.floor(Math.random() * frasi.length);
    const fraseRandom = frasi[randomNumber];
    console.log(randomNumber);

    return fraseRandom;
}

// creiamo il server con la seguente funzione
const server = http.createServer(function(req, res){

    // specifichiamo come risponde il server
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    res.end("Ciao, frase " + process.env.FRASE + randomFrase());

})

// avviamo il server con la funzione listen
server.listen(port, function(){
    console.log("server is running on port http://localhost:" + port)
})
