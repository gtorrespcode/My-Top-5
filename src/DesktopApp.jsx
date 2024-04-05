import Categories from "./components/Categories"
import ContentTable from "./components/ContentTable"
import Header from "./components/Header"


function DesktopApp() {

  return (
    <div className=" bg-black">
      <Header/>
      <Categories/>
      <ContentTable/>
    </div>
  )
}

export default DesktopApp
