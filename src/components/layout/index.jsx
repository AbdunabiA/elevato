import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import Header from "./header"
import './layout.scss'

const index = () => {
  return (
    <div className="layout">
        <Sidebar/>
        <div className="content">
            <Header/>
            <Outlet/>
        </div>
    </div>
  )
}

export default index