import { ListItem } from "./HTMLInfo";

export function Bootstrapinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"Bootstrap5"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"NPM & CDN"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Imports & modules"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Variables (sass & css)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Bootstrap icons"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Customization"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Layout"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Forms"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Components"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Grid"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"Helpers"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Utility API"}/>
                </ul>
            </div>
    )
}