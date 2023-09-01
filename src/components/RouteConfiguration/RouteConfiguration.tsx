import { Fragment } from "react"
import { useMediaQuery } from "react-responsive"
import { Routes, Route } from 'react-router-dom'
import Home from "../../pages/Mobile/Home/Home"
import HomeScreen from "../Mobile/HomeScreen/HomeScreen"
import { MobileRoutes } from "../Common/Routes"
import MobileEducation from "../../pages/Mobile/Education/Education"
import MobileSkills from "../../pages/Mobile/Skills/Skills"
import MobileExprience from "../../pages/Mobile/Exprience/Exprience"
const RouteConfiguration = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1024 })
    const isDesktop = useMediaQuery({ minWidth: 1025 })
    return (
        <Fragment>
            {
                isMobile &&
                <Routes>
                    <Route path="/" element={<Home />} >
                        <Route index element={<HomeScreen />} />
                        <Route path={MobileRoutes.education} element={<MobileEducation />} />
                        <Route path={MobileRoutes.skills} element={<MobileSkills />} />
                        <Route path={MobileRoutes.exprience} element={<MobileExprience />} />
                    </Route>
                </Routes>
            }
        </Fragment>
    )
}
export default RouteConfiguration