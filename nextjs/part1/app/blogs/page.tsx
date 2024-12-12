import axios from "axios";

async function getTodos() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
}

export default async function Blogs() {
  const todos = await getTodos();

  return (
    <div>
      {todos.map((todo: TodoInterface) => (
        //@ts-ignore
        //@Gyannnnn
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
}

interface TodoInterface {
  title: string;
  completed: boolean;
  id: number; 
}

function TodoItem({ title, completed }: TodoInterface) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Status: {completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}
