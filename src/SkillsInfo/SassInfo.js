import { ListItem } from "./HTMLInfo";

export function Sassinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"Sass & SCSS"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Variables"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Nesting"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Modules"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Mixins"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Extend"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"Operators"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Partials"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Functions"}/>
                </ul>
            </div>
    )
}