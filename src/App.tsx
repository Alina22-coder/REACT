import './App.css'
import {PostsComponent} from "./components/PostsComponent/PostsComponent.tsx";
import {TodosComponent} from "./components/TodosComponent/TodosComponent.tsx";
import {CommentsComponent} from "./components/CommentsComponent/CommentsComponent.tsx";


function App() {
  return (
    <>
      <PostsComponent/>
      <TodosComponent/>
        <CommentsComponent/>
    </>
  )
}

export default App
