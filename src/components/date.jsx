
export default function DateC({ objTarget, handlerChange }) {

    return (
        <>
            <h3>Date</h3>
            <label>From: </label>
            <input
                type="date"
                value={objTarget.from}
                onChange={(e) => handlerChange(e.target.value, 'from')}>
            </input>
            <label>To: </label>
            <input
                type="date"
                value={objTarget.to}
                onChange={(e) => handlerChange(e.target.value, 'to')}>
            </input>
        </>
    )
}