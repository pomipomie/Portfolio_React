import { ListItem } from "./HTMLInfo";

export function CSSinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"CSS3"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Selectors (simple, combinator, pseudo-class, pseudo-elements, attributes)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Prefixes and cross-browser compatibility"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Responsive design and media queries"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Units (rem, em, vw, vh, vmax, vmin)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Specificity"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Variables and functions (calc, min, max, clamp)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Positioning"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Box model"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Bakcground, images, gradients, borders, text effects"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Transition"}/> 
                    <ListItem icon={"bi bi-star-fill"} info={"Transforms"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Animations"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Filters"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Flexbox"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Grid"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Subgrid"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"At-Rules (@import, @media, @keyframes, @font-face, @supports)"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"Perspective and drawing"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Scroll-snap and scroll-padding"}/>
                </ul>
            </div>
    )
}