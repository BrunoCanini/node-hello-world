// importo il modulo http
const http = require("http"); 

// importo la libreria dotenv
const dotenv = require("dotenv");
dotenv.config();

// definiamo la porta
const port = +process.env.PORT || 3000;

// creiamo il server con la seguente funzione
const server = http.createServer(function(req, res){

    // specifichiamo come risponde il server
    res.end("Ciao, frase " + process.env.FRASE);

})

// avviamo il server con la funzione listen
server.listen(port, function(){
    console.log("server is running on port http://localhost:" + port)
})
