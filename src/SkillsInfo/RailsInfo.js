import { ListItem } from "./HTMLInfo";

export function Railsinfo() {
    return (
        <div>
            <ul className="list_ul">
                <ListItem icon={"bi bi-star-fill"} info={"Creating app"}/>
                <ListItem icon={"bi bi-star-fill"} info={"App structure"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Syntax & conventions"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Routing"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Layout & rendering"}/>
            </ul>
            <p className="list_p">Currently learning or planning to learn:</p>
            <ul className="list_ul">
                <ListItem icon={"bi bi-star-half"} info={"Active Record"}/>
                <ListItem icon={"bi bi-star-half"} info={"Migration"}/>
                <ListItem icon={"bi bi-star-half"} info={"Forms"}/>
                <ListItem icon={"bi bi-star-half"} info={"Devise"}/>
            </ul>
        </div>
    )
}