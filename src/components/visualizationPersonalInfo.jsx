


export default function VPersonalInfo({ fullName, position, phone, email, city, linkedIn }) {

    return (
        <div className="finalV showZone">
            <div className="headZone">
                <span className="icon personalI"></span>
                <h1>Personal Information</h1>
            </div>
            <h1>{fullName}</h1>
            <h2>{position}</h2>
            <div className="headZone">
                
                <span className="icon telI"></span>
                <span>{phone} </span>
                <span className="icon emailI"></span>
                <span>{email} </span>
                <span className="icon cityI"></span>
                <span>{city} </span>
                <span className="icon linkI"></span>
                <span>{linkedIn}</span>
            </div>
        </div>
    )
}