import { ListItem } from "./HTMLInfo";

export function Packageinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"npm"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"yarn"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"chocolatey"}/>
                </ul>
            </div>
    )
}