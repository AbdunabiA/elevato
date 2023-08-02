import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import Header from "./header"
import './layout.scss'
import { Suspense, useState } from "react"
import { useTranslation } from "react-i18next"

const Index = () => {
  const [sideMenu, setSideMenu] = useState(false)
  return (
    <div className="layout">
      <Suspense>
        <Sidebar {...{sideMenu, setSideMenu}}/>
      </Suspense>
        <div className="content">
          <Suspense>
            <Header {...{setSideMenu}}/>
          </Suspense>
            <Outlet/>
        </div>
    </div>
  )
}

export default Index