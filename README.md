# Дополнительный урок 02 для спринта 04 (Четверг)

- [Swagger документация](https://api.flashcards.andrii.es/docs)
- [react-toastify demo](https://fkhadra.github.io/react-toastify/introduction/)
- [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton#readme)
- [Пример готового проекта](https://04-sprint-02-add-lesson-for-mentor.vercel.app/)

### Задание 1
1. Рендерить компонент LinearLoader в компоненте App при запроса за колодами (fetchDecksTC)
- добавить action (setAppStatus) в app-reducer
- переписать fetchDecksTC, меняя status на 'succeeded' или 'failed' - используем синтаксис async/await, try...catch
- resultCode не нужен

### Задание 2
1. Дизейблить кнопки update и delete во время запросов при редактировании и удалении колоды
- используем useState в компоненте DeckItem
- подсказка: dispatch thunk возвращает промис

### Задание 4
1. Вынести обработку ошибок в функцию(common/utils/handle-error.ts) - передать туда err, dispatch. Записывать сообщение об ошибке в redux state (app-reducer)
2. Получить сообщение об ошибке из redux в компоненте GlobalError