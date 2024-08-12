


export default function VPersonalInfo({ fullName, position, phone, email, city, linkedIn }) {

    return (
        <div className="finalV showZone">
            <div className="headZone">
                <span className="personal"></span>
                <h1>Personal Information</h1>

            </div>
            <h2>{fullName}</h2>
            <h3>{position}</h3>
            <div>
                <span>{phone}</span>
                <span>{email}</span>
                <span>{city}</span>
                <span>{linkedIn}</span>
            </div>
        </div>
    )
}