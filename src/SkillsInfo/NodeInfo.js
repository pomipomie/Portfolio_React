import { ListItem } from "./HTMLInfo";

export function Nodeinfo() {
    return (
        <div>
            <ul className="list_ul">
                <ListItem icon={"bi bi-star-fill"} info={"Creating app"}/>
                <ListItem icon={"bi bi-star-fill"} info={"App structure"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Modules"}/>
                <ListItem icon={"bi bi-star-fill"} info={"HTTP"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Events"}/>
            </ul>
            <p className="list_p">Currently learning or planning to learn:</p>
            <ul className="list_ul">
                <ListItem icon={"bi bi-star-half"} info={"More about NodeJS"}/>
                <ListItem icon={"bi bi-star-half"} info={"Express"}/>
            </ul>
        </div>
    )
}