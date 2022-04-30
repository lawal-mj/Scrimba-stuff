import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App(){
  return(
    <>
      <Navbar />
      <Card
        img="a1.png"
        country="JAPAN"
        location="Mount Fuji"
        date="12 Jan, 2021 - 24 Jan, 2021"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meter (12,380 feet). Mount Fuji is the single most popular tourist site in  Japan, for both Japanese and foreign tourists."
        />

    </>
    )
}

export default App;