import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
      </main>
    </>
  )
}

export default HomePage