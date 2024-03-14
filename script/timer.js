        // Função para atualizar a contagem regressiva
        function atualizarContagem() {
            

            // Obter a data e hora atual
            var dataAtual = new Date();

            // Definir a data e hora final
            var dataFinal = new Date();

            if (dataAtual.getHours() < 12) {
                var horafim = 12;
            } else if (dataAtual.getHours() < 18) {
                var horafim = 18;
            } else if (dataAtual.getHours() < 24){
                var horafim = 24;
            }
        
            dataFinal.setHours(horafim, 0, 0, 0);

            // Calcular a diferença de tempo em segundos
            var diferencaSegundos = Math.floor((dataFinal - dataAtual) / 1000);

            // Converter a diferença de segundos em horas, minutos e segundos
            var horas = Math.floor(diferencaSegundos / 3600);
            var minutos = Math.floor((diferencaSegundos % 3600) / 60);
            var segundos = diferencaSegundos % 60;

            // Formatar a contagem regressiva
            var contagemFormatada = 
                (horas < 10 ? "0" + horas : horas) + ":" +
                (minutos < 10 ? "0" + minutos : minutos) + ":" +
                (segundos < 10 ? "0" + segundos : segundos);

            // Atualizar o conteúdo da div #contagem-regressiva
            document.getElementById("tempoexp").innerHTML = contagemFormatada;

            // Chamar a função atualizarContagem novamente após 1 segundo
            setTimeout(atualizarContagem, 1000);
        }

        // Iniciar a contagem regressiva
        atualizarContagem();