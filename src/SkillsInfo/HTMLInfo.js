
export function ListItem(props){
    return <li><i className={props.icon} style={{color: ' var(--cyan)', fontSize: '.75em'}}></i> {props.info}</li>
}

export function HTMLinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"HTML5"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Basic and common tags, attributes, entities"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Semantic tags"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Responsive design and styling (+CSS)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Forms"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Accessibility (ARIA)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Media tags"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"SVG"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Canvas API"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Geolocation API"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Drag&Drop API"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Document Object Model (DOM)"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"Web Storage API"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Web Workers API"}/>
                </ul>
            </div>
    )
}