const readline = require("readline");
const fs = require("fs");

// ВАЛИДАЦИЯ: Проверяем, что файл указан
if (process.argv.length < 3) {
  console.error("❌ Ошибка: укажите имя файла!");
  console.log("💡 Использование: node rewriter.js <имя_файла>");
  console.log("📝 Пример: node rewriter.js myfile.txt");
  process.exit(1);
}

const fileName = process.argv[2];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Чтение файла с указанием кодировки
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
   // console.error("❌ Ошибка при чтении файла:", err.message);
    console.log("📌 Проверьте:");
    console.log("  1. Существует ли файл '" + fileName + "'");
    console.log("  2. Правильно ли указано имя файла");
   // rl.close();
    return;
  }

  console.log("📄 Текущее содержимое файла '" + fileName + "':");
  console.log("═".repeat(50));
  console.log(data);
  console.log("═".repeat(50));

  // Запрос нового текста
  rl.question("✏️ Введите новый текст для файла:\n", (answer) => {
    // Перезапись файла с указанием кодировки
    fs.writeFile(fileName, answer, "utf8", (err) => {
      if (err) {
        console.error("❌ Ошибка при записи файла:", err.message);
        rl.close();
        return;
      }

      console.log("✅ Файл '" + fileName + "' успешно перезаписан!");
      console.log("📏 Новый размер: " + answer.length + " символов");
      rl.close();
    });
  });
});
