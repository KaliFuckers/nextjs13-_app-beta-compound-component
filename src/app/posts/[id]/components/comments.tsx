"use client";

import { useState } from "react";

import useSwr from "swr";

const fetcher = async (...args: any[]) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return fetch(`https://jsonplaceholder.typicode.com${args[0]}`).then((res) =>
    res.json()
  );
};

export default function Comments({ id }: { id: string }) {
  const { data, isLoading } = useSwr(`/posts/${id}/comments`, fetcher);

  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Load"} comments
      </button>
      {show && !isLoading ? (
        data ? (
          <ul>
            {data.map((dat: any) => (
              <div key={dat.id}>
                <h2>{dat.name}</h2>
                <span>{dat.email}</span>
                <p>{dat.body}</p>
                <br />
              </div>
            ))}
          </ul>
        ) : (
          <p>No hay comentarios </p>
        )
      ) : show && isLoading ? (
        <p>Loading Comments</p>
      ) : null}
    </>
  );
}
