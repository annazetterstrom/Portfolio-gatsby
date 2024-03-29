import React from "react"
import Emoji from "./emoji"

const ResumeWorkItem = ({title, timespan, workRole, description}) => (
    <li className="resume-item" key={title}>
        <h4><Emoji symbol="🖨" label="printer"/>{title}</h4>
        <span className="timespan">{timespan}</span>
        <span className="workRole">{workRole}</span>
        <p>{description}</p>
    </li>
)

const ResumeEducationItem = ({title, graduation, major}) => (
    <li className="resume-item" key={title}>
        <h4><Emoji symbol="🎓" label="graduation Cap" />{title}</h4>
        <span className="graduation">Graduation: {graduation}</span>
        <span className="major">Major: {major}</span>
    </li>
)

export default () => (
    <div> 
            <div className="resume-container work">
                <h3>Work Experience</h3>
                <ul>                    
                    <ResumeWorkItem
                        title="Designtorget"
                        timespan="2014-08 - Present"
                        workRole="Ecommerce Employee"
                        description="I´ve worked in the Designtorget stores since August 2014. In April 2018 I started working in their
                        ecommerce instead."
                    />
                    <ResumeWorkItem
                        title="Hasselbacken Eventfloor"
                        timespan="2016-06-2016-10"
                        workRole="Eventstaff and waitress"
                        description="Worked extra as a waitress at weddings, conferences and parties etc."
                    />
                    <ResumeWorkItem
                        title="McDonalds"
                        timespan="2012-03-2012-08"
                        workRole="Cashier"
                        description="Worked extra as a cashier while I was in High School."
                    />
                     <ResumeWorkItem
                        title="Redcross"
                        timespan="2014-08-2015-01 / 2019-09- Present"
                        workRole="Volunteer"
                        description="Volunteered at the youth program for child refugees."
                    />
                </ul>
            </div>

            <div className="resume-container education">
                <h3>Education</h3>
                <ul>
                <ResumeEducationItem
                    title="Nackademin"
                    graduation="2020"
                    major="Front-end Development"
                />
                <ResumeEducationItem
                    title="Gustavsbergs Gymnasium"
                    graduation="2015"
                    major="Makeup artist and stylist"
                />
                <ResumeEducationItem
                    title="Astar"
                    graduation="2017"
                    major="Pastrychef"
                />
                <ResumeEducationItem
                    title="Poston Butte High School"
                    graduation="2014"
                    major="High School Exhange Year"
                />
                </ul>
            </div>
    </div>
)