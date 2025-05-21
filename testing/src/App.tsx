import React from "react"
import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"
import { CarouselSection } from "./components/main/main"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CarouselSection />
      <Footer />
    </div>
  )
}

export default App

// // App.tsx
// import React from "react"
// import { Header } from "./components/header/header.tsx"
// import { Footer } from "./components/footer/footer.tsx"
// import { CarouselSection } from "./components/main/main.tsx" // استوردت الكاروسيل من هنا

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <CarouselSection /> {/* الكاروسيل هنا */}
//       <Footer />
//     </div>
//   )
// }

// export default App
