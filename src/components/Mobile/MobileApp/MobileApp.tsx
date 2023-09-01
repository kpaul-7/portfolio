import { Link } from 'react-router-dom'
import style from './MobileApp.module.css'
type MobileAppProps = {
    img: string,
    title: string,
    href: string
}
const MobileApp: React.FC<MobileAppProps> = ({ img, title, href = "/" }) => {
    return (
        <Link to={href}>
            <div className={style.MobileApp}>
                <div className={style.Icon}>
                    <img src={img} alt="icon" />
                </div>
                <p>{title}</p>
            </div>
        </Link>
    )
}
export default MobileApp