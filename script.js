let numerosInseridos = [];
let numerosOrdenados = [];

function ordenarNumeros() {
  const input = document.getElementById('numberInput');
  const numerosSpan = document.getElementById('numerosSpan');
  const ordenadosSpan = document.getElementById('ordenadosSpan');

  const inputValues = input.value.trim().split(' ');

  numerosInseridos = inputValues.map(value => parseFloat(value)).filter(value => !isNaN(value));
  numerosSpan.textContent = numerosInseridos.join(', ');

  numerosOrdenados = quickSort([...numerosInseridos]);
  ordenadosSpan.textContent = numerosOrdenados.join(', ');
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function medirTempo() {
  // Início da medição
  const inicio = performance.now();

  // Seu código aqui (simulação de um código que leva algum tempo para executar)
  for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
  }

  // Fim da medição
  const fim = performance.now();

  const tempoExecucao = fim - inicio;

  // Exibindo o tempo de execução na tela
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `Tempo de execução: ${tempoExecucao.toFixed(3)} ms`;
}