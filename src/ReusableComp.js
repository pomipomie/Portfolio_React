
export function ContainerBox(props) {
    return (
        <article className={props.className}>
            <h2>{props.title}</h2>
            <div className={props.classDiv}>
                {props.children}
            </div>
        </article>
    );
}

export function ContentBox(props) {
    return (
        <section>
            <a href={props.href}><p className={props.className}>{props.icon}  {props.name}</p></a>
        </section>
    )
}

export function ContentBoxB(props) {

    return (
        <section className={props.className}>
            <h3>{props.name}</h3> 
            <p>{props.level}</p>
            <p className={props.lastChild} id={props.id}>{props.desc}</p>
            <i className="bi bi-caret-down-fill" onClick={props.handleClick}></i>
        </section>
    )
}