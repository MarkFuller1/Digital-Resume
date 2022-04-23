import React, { Component } from 'react'
import { TitleBlock } from './TitleBlock';
import { PersonalData } from './PersonalData'

export class ResumeData extends Component {
    render() {
        return (
            <div className="ResumeDataCSS">
                <TitleBlock/>  
                <PersonalData/>
            </div>
        )
    }
}

export default ResumeData
