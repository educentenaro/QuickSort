let numerosOrdenados = [];

function ordenarNumeros() {
  const startTime = performance.now();

  const input = document.getElementById('numberInput');
  const ordenadosSpan = document.getElementById('ordenadosSpan');

  const inputValues = input.value.trim().split(' ');

  numerosInseridos = inputValues.map(value => parseFloat(value)).filter(value => !isNaN(value));

  numerosOrdenados = quickSort([...numerosInseridos]);
  ordenadosSpan.textContent = numerosOrdenados.join(', ');

  const endTime = performance.now();
  const executionTime = endTime - startTime;

  console.log(`Executado em ${executionTime} milissegundos.`);
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
