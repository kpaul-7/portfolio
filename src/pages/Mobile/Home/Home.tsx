import { Outlet } from 'react-router'
import Battary from '../../../components/Mobile/Battary/Battary'
import Timebar from '../../../components/Mobile/Timebar/Timebar'
import style from './Home.module.css'
import { MdOutlineNoSim } from "react-icons/md"
import IconDrawer from '../../../components/Mobile/IconDrawer/IconDrawer'
const Home = () => {
    return (
        <div className={style.Home}>
            <div className={style.Mobile}>
                <div className={style.Topbar}>
                    <div className={style.LeftNotification}>
                        <Timebar /> 
                        <IconDrawer/>
                    </div>
                    <div className={style.Camera}>
                        <div className={style.CameraLens}>
                            <div className={style.CameraLensMiddle}></div>
                        </div>
                    </div>
                    <div className={style.RightNotification}>
                        <MdOutlineNoSim />
                        <Battary />
                    </div>
                </div>
                <div className={style.Content}>
                    <Outlet />
                </div>
            </div>
        </div >
    )
}
export default Home