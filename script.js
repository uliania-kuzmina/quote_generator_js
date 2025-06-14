//массив цитат
const quotes = [
    "Жизнь – это то, что с тобой происходит, пока ты строишь планы. – Джон Леннон",
    "Успех – это движение от неудачи к неудаче без потери энтузиазма. – Уинстон Черчилль",
    "Секрет успеха в том, чтобы начать. – Марк Твен",
    "Мы становимся тем, о чем думаем. – Эрл Найтингейл",
    "Не ждите. Время никогда не будет подходящим. – Наполеон Хилл"
];


//функция для получения цитаты из API
async function generateQuoteFromAPI(){
    try {
        //Отправляем запрос к API
        let response = await fetch("https://type.fit/api/quotes");

        //Преобразуем ответ в JSON
        let data = await response.json();

        //Обновляем текст на странице
        document.getElementById("quote").textContent = `${data.content}`;
        document.getElementById("author").textContent = `- ${data.author}`;
    } catch (error) {
        console.error("Ошибка при получении цитаты:", error);
        document.getElementById("quote").textContent = "Ошибка загрузки цитаты.";
        document.getElementById("author").textContent = ""
    }
}


function generateQuoteFromArray(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex]
}