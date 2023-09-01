import Back from "../../../components/Mobile/Back/Back"
import { SkillType, SkillsConstant } from "../../../constants/common"
import style from './Skills.module.css'
const Skills = () => {
    return (
        <div className={style.Skills}>
            <Back href="/" title={
                <div className={style.Heading}>
                    <p>Skills</p>
                </div>
            } />
            <div>
                {SkillsConstant.map((s: SkillType, idx: number) => {
                    return (
                        <div className={style.Skill}>
                            <p className={style.SkillName}>{idx + 1}. {s.title}: </p>
                            <ul>
                                {
                                    s.elements.map((sE) => {
                                        return <li>{sE.name}</li>
                                    })
                                }
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className={style.End}></div>
        </div>
    )
}
export default Skills