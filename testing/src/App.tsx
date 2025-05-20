
import { Header } from "./components/header/header.tsx"
import { Main } from "./components/main/main.tsx"
import { Footer } from "./components/footer/footer.tsx"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
