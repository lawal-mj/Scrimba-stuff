import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from './data'

function App(){
  const dataList = data.map(function(item){
    return item
  })

  console.log(dataList)


  return(
    <>
      <Navbar />


      <Card
        key={dataList[0].id}
        img={dataList[0].img}
        country={dataList[0].country}
        location={dataList[0].location}
        date={dataList[0].date}
        description={dataList[0].description}
        />

    </>
    )
}

export default App;