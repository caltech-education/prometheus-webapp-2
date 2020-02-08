import React from 'react'
import './style.scss'

// Icons
import IconTeacher from '../../assets/svgs/Icon_awesome-chalkboard-teacher/Icon awesome-chalkboard-teacher@3x.png'
import IconSchool from '../../assets/svgs/Icon_awesome-school/Icon awesome-school@3x.png'
import IconIonicSchool from '../../assets/svgs/Icon_ionic-md-school/Icon ionic-md-school@3x.png'

export default function Checkbox() {
    return (
        <>
            <div className="checkbox-container">
                <label className="radio-img">
                    <input type="radio" name="layout" value="student" />
                    <div className="img-container">
                        <img width="20px" height="18px" alt="student" src={IconIonicSchool}/>
                    </div>
                </label>
                
                <label className="radio-img">
                    <input type="radio" name="layout" value="teacher"/>
                    <div className="img-container">
                        <img width="22px" height="18px" alt="teacher" src={IconTeacher}/>
                    </div>
                </label>
                
                <label className="radio-img">
                    <input type="radio" name="layout" value="coordinator"/>
                    <div className="img-container">
                        <img width="25px" height="20px" alt="coordinator" src={IconSchool}/>
                    </div>
                </label>  
            </div>
      </>
    )
}