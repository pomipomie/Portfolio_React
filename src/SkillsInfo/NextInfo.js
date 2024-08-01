import { ListItem } from "./HTMLInfo";

export function Nextinfo() {
    return (
        <div>
            <ul className="list_ul">
                <ListItem icon={"bi bi-star-fill"} info={"Creating app"}/>
                <ListItem icon={"bi bi-star-fill"} info={"App structure"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Routing"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Styling"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Data fetching"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Middleware"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Deploy to Vercel"}/>
            </ul>
        </div>
    )
}