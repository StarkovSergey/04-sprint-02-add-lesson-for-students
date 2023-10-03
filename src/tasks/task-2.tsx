type MyComponentProps<T> = {
  items: T[]
  defaultItem: T
}
function MyComponent<T extends number | User>(props: MyComponentProps<T>) {
  console.log(props)
  return <p>some content</p>
}

const App = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      {/*defaultItem должен принимать только number*/}
      <MyComponent items={[1, 2]} defaultItem={5} />

      {/*defaultItem должен принимать только User*/}
      <MyComponent items={users} defaultItem={{ name: 'Brendan', age: 1 }} />
    </>
  )
}

type User = {
  name: string
  age: number
}
