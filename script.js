
// Esta linha obtém o elemento HTML cujo id é "resultado". Presumivelmente, no HTML associado a este código, há um elemento onde o resultado da operação da calculadora será exibido.
const resultado = document.getElementById('resultado'); 

// Inicializa uma variável operacao como uma string vazia. Esta variável será usada para armazenar a expressão matemática que o usuário digita na calculadora.
        let operacao = '';

 // Esta função é chamada sempre que um número ou operador é pressionado na calculadora.
        function insert(valor) {

// Concatena o valor recebido como argumento (valor) à variável operacao. Isso constrói a expressão matemática à medida que o usuário vai digitando.
            operacao += valor;
            resultado.innerHTML = operacao;
// Atualiza o conteúdo do elemento HTML com id="resultado" para refletir a expressão atual que está sendo construída (operacao).
         }

        
        function clean() {     //  Esta função é responsável por limpar a operação atual da calculadora.
        
            operacao = '';  //  Define a variável operacao como uma string vazia, reiniciando a calculadora.
            resultado.innerHTML = operacao;   // Atualiza o conteúdo do elemento HTML com id="resultado" para exibir a operação limpa (que agora é uma string vazia).
        }

       
        function back() {    // Esta função é acionada quando o botão de "Backspace" é pressionado na calculadora.
         
            operacao = operacao.slice(0, -1);   // Utiliza o método slice() para remover o último caractere da string operacao.  
            resultado.innerHTML = operacao;     // Atualiza o conteúdo do elemento HTML com id="resultado" para refletir a nova operação após a remoção do último caractere.
        }
        
        function calcular() {  // Esta função é chamada quando o botão de "igual" (=) é pressionado na calculadora.
            try {               // try { ... } catch (error) { ... }: Utiliza um bloco try-catch para capturar erros que possam ocorrer durante a avaliação da expressão matemática.
                let result = eval(operacao);     // let result = eval(operacao);: Usa a função eval() para avaliar a string operacao como uma expressão matemática válida em JavaScript. Isso permite que a calculadora realize cálculos dinâmicos baseados na entrada do usuário.
                resultado.innerHTML = result.toFixed(2);  // resultado.innerHTML = result.toFixed(2);: Exibe o resultado da operação arredondado para duas casas decimais no elemento HTML com id="resultado".
                operacao = result.toFixed(2);       
            } catch (error) {
                resultado.innerHTML = 'Erro';
            }
        }

    

    
        
    
        
    
        
    // resultado.innerHTML = 'Erro';: Se ocorrer um erro durante a avaliação da expressão matemática (por exemplo, uma entrada inválida), exibe "Erro" no elemento HTML com id="resultado".
        
      



