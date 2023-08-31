"use client"
import Container from "./container";
import { useViewport } from "./use-viewport-hook";

export default function Home() {
  const { isLoaded } = useViewport();

  return (
    <div id="wrap">
      {/* <Container /> */}
      {isLoaded ? <Container /> : <h1>Loading...</h1>}
    </div>
  )
}
