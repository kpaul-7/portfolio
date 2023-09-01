import Back from "../../../components/Mobile/Back/Back"
import { ExprienceConstant, ExprienceType } from "../../../constants/common"
import style from './Exprience.module.css'
const Exprience = () => {
    return (
        <div className={style.Exprience}>
            <Back href="/"/>
            <div className={style.Heading}>
                <p>Exprience</p>
            </div>
            <div>
                {
                    ExprienceConstant.map((ex:ExprienceType)=>{
                        return (
                            <div className={style.OneExprience}>
                                <div className={style.Company}>
                                    <p>{ex.company}</p>
                                </div>
                                <div className={style.Details}>
                                    <p className={style.Role}>{ex.role}</p>
                                    <p className={style.Duration}>{ex.startYear} - {ex.endYear}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Exprience