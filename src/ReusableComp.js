
export function ContainerBox(props) {
    return (
        <article className="container">
            <h2>{props.title}</h2>
            {props.children}
        </article>
    );
}

export function ContentBox(props) {
    return (
        <section>
            <a href={props.href}><p className="content">{props.icon} {props.name}</p></a>
        </section>
    )
}