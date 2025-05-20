import React from "react"
import { Button } from "../ui/button"

export function Main() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Jadara Events</h1>
      <p className="mb-6">Discover the best events happening near you!</p>
      <Button>Explore Events</Button>
    </main>
  )
}
