
import CarrerSumary from "./carrerSumarry";
import Skills from "./coreSkills";
import Education from "./education";
import PersonalInfo from "./personalInfo";



export default function Person() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="mainHeader">Build your CV</h1>
            <form onSubmit={handleSubmit}>
                <PersonalInfo></PersonalInfo>
                <Skills></Skills>
                <CarrerSumary></CarrerSumary>
                <Education></Education>
                <button>Send</button>

            </form>
        </div>
    )
}