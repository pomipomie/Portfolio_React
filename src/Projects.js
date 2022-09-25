import axios from "axios";
import { useState, useEffect } from "react";
import { ContainerBox, TagButton } from "./ReusableComp";
import { Link } from "react-router-dom";

export default function Projects() {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const url = 'http://pzxrslcdua.us09.qoddiapp.com/pdata/projects/list';
            const response = await axios.get(url);
            //console.log(response.data);
            const sorted = response.data.reverse();
            //console.log(sorted);
            setData(sorted);
        }
        catch(error) {
            console.error('error: '+error);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <ContainerBox title="Projects" className="container" classDiv="containerbox_div">
            {!data ? 'Loading...' : data.map( 
                    (dat, index) => {
                        return (
                            <section className="content" key={'p'+dat.projId}>
                                <Link to={`/projects/${dat.projId}`}>
                                    <h3 className="no_shadow">{dat.pname}</h3>
                                    <img className="project_img_s" src={dat.ppreview} alt={`${dat.pname} preview`}/>
                                </Link>
                                {dat.skills.map(
                                    (skill) => {
                                        return (
                                            <TagButton skill={skill.skillName}/>
                                        )
                                    }
                                )}
                            </section>
                        )
                    }
                )}
        </ContainerBox>
    )
}