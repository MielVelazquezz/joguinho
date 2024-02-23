import random

while True:
    
    print('')
    print('+----------- Escolha o nível ------------+')
    print('|    0 - Encerrar o programa             |')
    print('|    1 - Nivel Facil (8 tentativas)      |')
    print('|    2 - Nivel Medio (5 tentativas)      |')
    print('|    3 - Nivel Dificil (3 tentativas)    |')
    print('+----------------------------------------+')
    print('')

    informacao = int(input("Digite o nivel desejado: "))

    if informacao == 0:
        print('')
        print('Finalizado ;)')
        print('')
        break
    
    elif informacao in [1, 2, 3]:
        numero_tentativas = 8 if informacao == 1 else (5 if informacao == 2 else 3)
        nivel_texto = 'Facil' if informacao == 1 else ('Medio' if informacao == 2 else 'Dificil')

        print('')
        print('Você está em --> Nivel', nivel_texto)
        print('')

        numero_aleatorio = random.randint(1, 100)
        acertou = False

        while numero_tentativas > 0 and not acertou:
            print('')
            numero = int(input("Digite um numero: "))
            print('')

            if numero == numero_aleatorio:
                acertou = True
            else:
                if numero < numero_aleatorio:
                    print('O numero misterioso é maior. Tente novamente.')
                else:
                    print('O numero misterioso é menor. Tente novamente.')

                numero_tentativas -= 1

        if acertou:
            print('')
            print(' +-----------------------------------------+')
            print(' |           Você acertou! yayy ♫          |')
            print(' +-----------------------------------------+')
            print('')
        else:
            print('')
            print('Suas tentativas acabaram. O numero misterioso era', numero_aleatorio)
            print('')
    else:
        print('Não reconhecemos este código, por favor tente novamente')
