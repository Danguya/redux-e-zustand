import { Provider as ReduxProvider } from 'react-redux'
import { TodoList } from './components/todoList'
import { AddTodo } from './components/AddTodo'
import { store } from './store'

export function App() {

  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  )
}

