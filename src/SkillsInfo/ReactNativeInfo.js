import { ListItem } from "./HTMLInfo";

export function ReactNativeinfo() {
    return (
        <div>
            <ul className="list_ul">
                <ListItem icon={"bi bi-star-fill"} info={"CLI vs Expo"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Creating app with CLI"}/>
                <ListItem icon={"bi bi-star-fill"} info={"App structure"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Components"}/>
                <ListItem icon={"bi bi-star-fill"} info={"Props"}/>
            </ul>
            <p className="list_p">Currently learning or planning to learn:</p>
            <ul className="list_ul">
                <ListItem icon={"bi bi-star-half"} info={"Styles"}/>
                <ListItem icon={"bi bi-star-half"} info={"State"}/>
                <ListItem icon={"bi bi-star-half"} info={"Events"}/>
            </ul>
        </div>
    )
}