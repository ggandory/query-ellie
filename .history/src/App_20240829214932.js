import React from "react";
import "./App.css";
import MainProducts from "./components/MainProducts";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return <MainProducts />;
}
