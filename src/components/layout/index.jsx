import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import Header from "./header"
import './layout.scss'
import { useState } from "react"

const Index = () => {
  const [sideMenu, setSideMenu] = useState(false)
  return (
    <div className="layout">
        <Sidebar {...{sideMenu, setSideMenu}}/>
        <div className="content">
            <Header {...{setSideMenu}}/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Index