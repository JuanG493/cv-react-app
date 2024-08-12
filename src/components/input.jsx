export default function InpuntCom({
    textLabel,
    typeInp,
    valueInp,
    handleChange,
    property: propertyObj = '' }) {

    return (
        <>
            <label>{textLabel}</label>
            <input
                type={typeInp}
                value={valueInp}
                onChange={(e) => handleChange(e.target.value, propertyObj)}

            ></input>
        </>
    )

}