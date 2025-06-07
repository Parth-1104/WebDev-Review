import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <Todo id={1} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function (res) {
        const json = await res.json();
        setTodo(json.todo); // note: API returns `todo`, not `todos`
      });
  }, [id]); // runs again if `id` changes

  if (!todo) return <div>Loading...</div>;

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}

export default App;
