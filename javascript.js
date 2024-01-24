// Асинхронная функция для первого блока
async function renderBlockA() {
  // Выполнение асинхронных операций...
  const result = await someAsyncOperation();
  
  // Обновление содержимого блока на веб-странице
  const blockA = document.getElementById('blockA');
  blockA.textContent = result;
}

// Асинхронная функция для второго блока
async function renderBlockB() {
  // Выполнение асинхронных операций...
  const result = await anotherAsyncOperation();
  
  // Обновление содержимого блока на веб-странице
  const blockB = document.getElementById('blockB');
  blockB.textContent = result;
}

// Вызов функций для отрисовки блоков
renderBlockA();
renderBlockB();
