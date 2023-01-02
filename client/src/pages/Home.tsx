import { useState } from "react";
import { Typography } from "@mui/material";
import { Counter } from "../features/counter/Counter";
import AddIcon from "@mui/icons-material/Add";

function Home() {
  return (
    <>
      <Typography color="primary.dark" variant="h1">
        Home
      </Typography>
      <div>
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-3xl font-bold text-red-600">
            Install & Setup Vite + React + Typescript + Tailwind CSS 3
          </h1>
        </div>
      </div>
      <div className="card">
        <Counter />
      </div>
    </>
  );
}
export default Home;
