//비동기 함수
async function fetchGetTodo(): Promise<void> {
  const res = await fetch("주소");
}

async function fetchGetTodo2(): Promise<string> {
  const res = await fetch("주소");
  return "hello";
}

async function fetchGetTodo3(): Promise<boolean> {
  const res = await fetch("주소");
  return true;
}

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

async function fetchGetTodo4(): Promise<Todo> {
  const res = await fetch("주소");
  return { id: 1, title: "할일", completed: false };
}
