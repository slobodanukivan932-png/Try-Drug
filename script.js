// Знаходимо елементи вікна
const modal = document.getElementById("orderModal");
const closeButton = document.querySelector(".close-button");
const orderButtons = document.querySelectorAll(".card button");
const orderForm = document.getElementById("orderForm");

// Додаємо подію для кожної кнопки "Замовити"
orderButtons.forEach(button => {
  button.addEventListener("click", () => {
    modal.style.display = "block"; // Показуємо вікно
  });
});

// Закриваємо вікно при натисканні на хрестик
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закриваємо вікно, якщо клікнути мишкою поза ним (на темний фон)
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Обробка відправки форми
orderForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки
  alert("Дякуємо! Ваше замовлення та коментар прийнято!");
  modal.style.display = "none"; // Ховаємо вікно
  orderForm.reset(); // Очищаємо поля форми
});