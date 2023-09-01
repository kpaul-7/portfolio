import { useLocation } from "react-router";
import { MobileRoutes } from "../../Common/Routes";
import EducationIcon from '../../../assets/img/icons/edu.png'
import SkillIcon from '../../../assets/img/icons/skills.jpg'

const IconDrawer = () => {
    const {pathname: path} = useLocation()
    let icon = null 
    if(path === `/${MobileRoutes.education}`){
        icon = EducationIcon
    }else if(path === `/${MobileRoutes.skills}`){
        icon = SkillIcon
    }
    return <div style={{
        display: "flex",
        gap:"10px",
        alignItems: "center"
    }}>
        {
            icon && 
            <>
            <p> | </p>
           <img style={{
            width: "15px",
            height: "15px",
            backgroundColor: "white",
            zIndex: 100,
            borderRadius: "50%"
           }} src={icon} /> </>
        }
    </div>
}
export default IconDrawer