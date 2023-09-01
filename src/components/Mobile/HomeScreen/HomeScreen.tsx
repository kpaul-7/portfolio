import MobileApp from '../MobileApp/MobileApp'
import style from './HomeScreen.module.css'
import educationIcon from '../../../assets/img/icons/edu.png'
import skillIcon from '../../../assets/img/icons/skills.jpg'
import projectIcon from '../../../assets/img/icons/projects.jpg'
import exprienceIcon from '../../../assets/img/icons/exprience.png'
import { IconTitle } from '../../../constants/Mobile/Mobile'
import { MobileRoutes } from '../../Common/Routes'
const HomeScreen = () => {
    return (
        <div className={style.HomeScreen}>
            <div className={style.HomeScreenRow}>
                <MobileApp
                    href={MobileRoutes.education}
                    img={educationIcon}
                    title={IconTitle.educationIconTitle}
                />
                <MobileApp
                    href={MobileRoutes.skills}
                    img={skillIcon}
                    title={IconTitle.skillIconTitle}
                />
                <MobileApp
                    href={MobileRoutes.exprience}
                    img={exprienceIcon}
                    title={IconTitle.exprienceIconTitle}
                />
                <MobileApp
                    href='/'
                    img={projectIcon}
                    title={IconTitle.projectIconTitle}
                />
            </div>
            <div className={style.HomeScreenRow}>
                <MobileApp
                    href='/'
                    img=""
                    title="Socials"
                />
            </div>
        </div>
    )
}
export default HomeScreen