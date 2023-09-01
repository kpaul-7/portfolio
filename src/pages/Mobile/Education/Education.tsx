import Back from "../../../components/Mobile/Back/Back"
import { EducationConstant, EducationConstantType } from "../../../constants/common"
import style from './Education.module.css'
const Education = () => {
    return (
        <div className={style.Education}>
            <Back href="/" title={<div className={style.Title}>
                <p>Education</p>
            </div>} />
            <div>
                <div>
                    {
                        EducationConstant.map((edu: EducationConstantType) => {
                            return (
                                <div className={style.OneDegree}>
                                    <div className={style.Degree}>
                                        <p>{edu.degree}</p>
                                    </div>
                                    <div className={style.Details}>
                                        <span className={style.Stream}>{edu.stream}</span>
                                        <span className={style.EducationYear}>{edu.startYear} - {edu.endYear}</span>
                                    </div>
                                    <div className={style.InstituteDetails}>
                                        <p>{edu.institute}, {edu.upperInstitute}</p>
                                    </div>
                                    <div className={style.KeyNote}>
                                        {edu.keyNote && <p>*{edu.keyNote}</p>}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.End}></div>
            </div>
        </div>
    )
}
export default Education