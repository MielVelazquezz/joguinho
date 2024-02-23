const readline = require('readline-sync');
var informacao = -1;

while (informacao != 0) {

    console.log('');
    console.log('+----------- Escolha o nível ------------+');
    console.log('|    0 - Encerrar o programa             |');
    console.log('|    1 - Nivel Facil (8 tentativas)      |');
    console.log('|    2 - Nivel Medio (5 tentativas)      |');
    console.log('|    3 - Nivel Dificil (3 tentativas)    |');
    console.log('+----------------------------------------+');
    console.log('');

    informacao = parseInt(readline.question("Digite o nivel desejado: "));

    if (informacao == 1 || informacao == 2 || informacao == 3) {

        var numeroTentativas = informacao == 1 ? 8 : (informacao == 2 ? 5 : 3);
        var nivelTexto = informacao == 1 ? 'Facil' : (informacao == 2 ? 'Medio' : 'Dificil');

        console.log('');
        console.log('Você está em --> Nivel ' + nivelTexto);
        console.log('');

        var numeroAleatorio = Math.ceil(Math.random() * 100);
        var numero;
        var acertou = false;

        while (numeroTentativas > 0 && !acertou) {

            console.log('');
            numero = parseInt(readline.question("Digite um numero: "));
            console.log('');

            if (numero == numeroAleatorio) {
                acertou = true;

            } 
            
            else {

                if (numero < numeroAleatorio) {

                    console.log('O numero misterioso é maior. Tente novamente.');

                } 

                else {

                    console.log('O numero misterioso é menor. Tente novamente.');

                }

                numeroTentativas--;
            }
            
        }

        if (acertou) {

            console.log('');
            console.log(' +-----------------------------------------+');
            console.log(' |           Você acertou! yayy ♫          |');
            console.log(' +-----------------------------------------+');
            console.log('');

        } 
        else {

            console.log('');
            console.log('Suas tentativas acabaram. O numero misterioso era ' + numeroAleatorio);
            console.log('');

        }
    } else if (informacao == 0) {
        console.log('');
        console.log('Finalizado ;)');
        console.log('');
    } else {
        console.log('Não reconhecemos este código, por favor tente novamente');
    }
}

