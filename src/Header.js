
export default function Header() {
    return (
        <header>
            <div className="banner" id="banner_container">
                <img className="banner" id="banner_img" src="https://via.placeholder.com/1200x300.webp" alt="banner"/>
            </div>
            <div className="avatar" id="avatar_container">
                <img className="avatar" id="avatar_img" src="https://via.placeholder.com/150x150.webp" alt="avatar"/>
            </div>
            <div id="title_container">
                <h1 className="title_h1" id="first_name">María Xiomara</h1>
                <h1 className="title_h1" id="last_name">Badano</h1>
            </div>
            <div id="subtitle_container">
                <h3 className="not_last">Jr. Full Stack Developer</h3>
                <h3 className="not_last">Jr. QA Tester</h3>
                <h3>Always learning something new</h3>
            </div>
        </header>
    )
}