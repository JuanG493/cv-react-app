export default function VisualItems({ listElements, text }) {
    if (listElements.length > 0) {
        return (
            <div>
                <i> {text} </i>
                <ul>
                    {listElements.map(elm => <li key={elm.id}>{elm.value} </li>)}
                </ul>
            </div>
        )
    } else {
        return <></>
    }
}