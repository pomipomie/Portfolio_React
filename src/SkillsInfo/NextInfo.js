import { ListItem } from "./HTMLInfo";

export function Nextinfo() {
    return (
        <div>
            <ul className="list_ul">
                <ListItem icon={"bi bi-star-fill"} info={"Creating app"}/>
                <ListItem icon={"bi bi-star-fill"} info={"App structure"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Routing"}/>
            </ul>
            <p className="list_p">Currently learning or planning to learn:</p>
            <ul className="list_ul">
                <ListItem icon={"bi bi-star-half"} info={"Styling"}/>
                <ListItem icon={"bi bi-star-half"} info={"Data fetching"}/>
                <ListItem icon={"bi bi-star-half"} info={"Middleware"}/>
                <ListItem icon={"bi bi-star-half"} info={"Deploy to Vercel"}/>
            </ul>
        </div>
    )
}