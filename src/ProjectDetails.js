import axios from "axios";
import { useState, useEffect } from "react";
import { TagButton } from "./ReusableComp";

export default function ProjectDetails() {
    let myPath = window.location.pathname;
    let myNumber = myPath.match(/\d/g);
    myNumber.length>1 ? myNumber = myPath.match(/\d/)+myPath.match(/\d$/) : myNumber = myPath.match(/\d/g);

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const url = `http://pzxrslcdua.us09.qoddiapp.com/pdata/projects/${myNumber}/search`;
            const response = await axios.get(url);
            //console.log(response.data);
            setData(response.data);
        }
        catch(error) {
            console.error('error: '+error);
        }
    };

    useEffect(() => {
        getData()
    })

    return (
        <section className="content">
            <h3>{data.pname}</h3>
            {!data.skills ? "" :
                <a href={data.purl} target="_blank" rel="noreferrer">
                    <img className="project_img_l" src={data.ppreview} alt={`${data.pname} preview`}/>
                </a>
            }
            <p className="pdesc_p">{data.pdescription}</p>
            <div>
                {!data.skills ? "" : <p className="tag_bnd">Technologies: </p>}
                {!data.skills ? <p className="loading">Loading...</p> : data.skills?.map(
                                        (skill) => {
                                            return (
                                                <TagButton skill={skill.skillName}/>
                                            )
                                        }
                                    )}
            </div>
            {data.purl ? 
                <div style={{margin: "1em"}}>
                    <p className="tag_bnd">URL: </p>
                    <a href={data.purl} target="_blank" rel="noreferrer" alt="Preview"><p className="tag_bnd">{data.purl}</p></a>
                </div>
                : "" }
            {data.prepo ? 
                <div style={{margin: "1em"}}>
                    <p className="tag_bnd">Repository: </p>
                    <a href={data.prepo} target="_blank" rel="noreferrer"><p className="tag_bnd">{data.prepo}</p></a>
                </div>
             : "" }
        </section>
    )
}