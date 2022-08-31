export const getApi = async (loading) => {
  loading(true);
  const api = await fetch(
    "https://todo-typescript-c0a5c-default-rtdb.firebaseio.com/todo.json"
  );
  const data = await api.json();
  loading(false);
  return data;
};

export const postApi = (actionData) => {
  fetch("https://todo-typescript-c0a5c-default-rtdb.firebaseio.com/todo.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: actionData.id,
      text: actionData.text,
    }),
  })
    .then((res) => res.json())
    .then((responseData) => responseData);
};

export const putApi = async (id, updated) => {
  const api = await fetch(
    `https://todo-typescript-c0a5c-default-rtdb.firebaseio.com/todo/${id}.json`,
    {
      method: "PUT",
      body: JSON.stringify({
        text: updated,
      }),
    }
  );
  const data = await api.json();
  return data;
};

export const deleteApi = (id) => {
  const api = fetch(
    `https://todo-typescript-c0a5c-default-rtdb.firebaseio.com/todo/${id}.json`,
    {
      method: "DELETE",
    }
  )
    .then((res) => res.json())
    .catch((error) => error);
  return api;
};
