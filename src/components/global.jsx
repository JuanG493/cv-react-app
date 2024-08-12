
import Form from 'react-bootstrap/Form';
import CarrerSumary from "./carrerSumarry";
import Skills from "./coreSkills";
import Education from "./education";
import PersonalInfo from "./personalInfo";


export default function Person() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='mainContainer'>
            <Form onSubmit={handleSubmit} >
                <div className="mainHeader">
                    <h1 >Build your CV</h1>
                </div>
                <PersonalInfo></PersonalInfo>
                <Skills></Skills>
                <CarrerSumary></CarrerSumary>
                <Education></Education>
   

            </Form>
        </div>
    )
}