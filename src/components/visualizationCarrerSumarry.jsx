import VisualItems from "./visualItems";

export default function VisualExperience({ listExp }) {

    return (
        <div className="finalV showZone">
            <div className="headZone">
                <span className="icon summaryI"></span>
                <h1> Career Summary</h1>
            </div>
            {listExp.map(exp => {
                return (
                    <div key={exp.id}>
                        <div>
                            {(exp.from != '' && exp.to != '') &&
                                <span>
                                    <b>{exp.from} - </b>
                                    <b>{exp.to}</b>
                                </span>
                            }
                            <h4>{exp.company},{exp.city}</h4>
                            <h4>{exp.position}</h4>
                        </div>
                        <div>
                            <h5><i>Outline</i></h5>
                            <p>{exp.outline}</p>
                        </div>
                        <div>
                            <h5><i></i></h5>
                            <VisualItems
                                listElements={exp.responsabilities}
                                text={"key Responsabilities"}
                            ></VisualItems>

                        </div>
                        <div>
                            <h5><i></i></h5>
                            <VisualItems
                                listElements={exp.achievements}
                                text={"key Achievements"}
                            ></VisualItems>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}