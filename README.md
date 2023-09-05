# Дополнительный урок 02 для спринта 04 (Четверг)

- [Swagger документация](https://api.flashcards.andrii.es/docs)
- [react-toastify demo](https://fkhadra.github.io/react-toastify/introduction/)

### Задание 1
1. Рендерить компонент LinearLoader в компоненте App при выполнении запроса за колодами (fetchDecks)
- добавить action (setAppStatus)
- переписать fetchDecksTC, меняя status на 'succeeded' или 'failed' (использовать синтаксис async/await, try...catch)
- resultCode не нужен

### Задание 2
1. Дизейблить кнопки update и delete во время запроса при редактировании или удалении колоды
- использовать useState в компоненте DeckItem
- подсказка: dispatch thunk возвращает промис

### Задание 3
1. Переписать updateDeckTC на async/await, try...catch
2. Вывесли сообщение об ошибке в консоль. Учесть все 3 кейса


case-1: ошибка запроса (приходят с бэкенда) - axios создаёт объект ошибки, в response.data помещает ответ сервера
case-2: network error (на сторое клиента) - axios создаёт объект ошибки, текст ошибки берём из поля message
case-3: ошибка вне запроса - генерируется JS - имеет поле message


### Задание 4
1. Вынести обработку ошибок в функцию handleError - передать в неё dispatch, записывать errorMessage в redux state
2. Получить сообщение об ошибке в компоненте GlobalError