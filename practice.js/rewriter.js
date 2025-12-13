const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/// скрипт чтения файла
const fs = require("fs");
fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
  /// запрос инфы у пользователя + перезапись файла
  rl.question("Введите новый текст для файла:\n", (answer) => {
    fs.writeFile(process.argv[2], answer, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Файл перезаписан.");
      rl.close();
    });
  });
});

