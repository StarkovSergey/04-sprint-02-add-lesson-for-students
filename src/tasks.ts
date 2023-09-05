// getLastItem, которая принимает массив и возвращает последний элемент массива
// const res1 = getLastItem(['html', 'css']) // res1 string
// const res2 = getLastItem([1, 2, 3]) // res1 number

const getLastItem = <T>(array: T[]) => {
  return array[array.length - 1]
}

const res1 = getLastItem(['html', 'css']) // res1 string
const res2 = getLastItem([1, 2, 3]) // res1 number
