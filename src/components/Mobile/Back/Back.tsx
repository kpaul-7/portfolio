import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
import style from './Back.module.css'
import { ReactNode } from "react";
type BackProps = {
    href: string,
    title?: string | ReactNode
}

const Back: React.FC<BackProps> = ({ href,title="Back" }) => {
    return (
        <div className={style.Back}>
            <Link to={href}>
                <div className={style.BackDiv}>
                    <i><BiArrowBack /></i>
                    {title}
                </div>
            </Link>
        </div>
    )
}
export default Back