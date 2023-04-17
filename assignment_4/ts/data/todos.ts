export interface Itodo {
  id?: number;
  title: string;
  done: boolean;
}

const todos = [
  {
    id: 1,
    title: "Walk the dog",
    done: true,
  },
  {
    id: 2,
    title: "Feed the dog",
    done: true,
  },
  {
    id: 3,
    title: "Feed the cat",
    done: false,
  },
];

//Hämta alla todos
export const getAll = () => {
  return todos;
};

//Hämta en todos specifika id
export const findById = (id: string) => {
  const parsedId = parseInt(id);

  const todo = todos.find((c) => c.id === parsedId);
  return todo;
};

/* //Lägg till en todo
export const add = (todo: Itodo) => {
  const lasttodo = todos.slice(-1)[0];

  let id = lasttodo?.id;
  id = id ? id + 1 : 1;

  todos.push({
    id,
    title: todo.title,
    done: todo.done,
  });
};

//Uppdatera en todo
export const update = (id: string, todo: Itodo) => {
  const parsedId = parseInt(id);

  const i = todos.findIndex((c) => c.id === parsedId);

  todos[i].title = todo.title;
  todos[i].done = todo.done;
};

//Ta bort en todo
export const deleteById = (id: string) => {
  const parsedId = parseInt(id);

  const i = todos.findIndex((c) => c.id === parsedId);
  todos.splice(i, 1);
}; */
