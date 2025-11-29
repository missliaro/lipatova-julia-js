<script>
  const fs = require('fs');
  const readline = require('readline');

  async function main() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // Задача 1
    const text = await new Promise(resolve => {
      rl.question('Введите текст для output.txt: ', resolve);
    });
    fs.writeFileSync('output.txt', text, 'utf8');
    console.log('Текст сохранен в output.txt');

    // Задача 2
    try {
      const content = fs.readFileSync('data.txt', 'utf8');
      console.log(`Строк: ${content.split('\n').length}`);
      console.log(`Символов: ${content.length}`);
    } catch {
      console.log('Файл data.txt не найден');
    }

    // Задача 3
    console.log('Вводите строки (stop для выхода):');
    const logStream = fs.createWriteStream('log.txt', { flags: 'a', encoding: 'utf8' });

    while (true) {
      const input = await new Promise(resolve => {
        rl.question('> ', resolve);
      });

      if (input.toLowerCase() === 'stop') break;

      logStream.write(input + '\n');
      console.log('Добавлено в log.txt');
    }

    logStream.end();
    rl.close();
  }

  main();

</script>
  


