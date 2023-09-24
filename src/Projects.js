import axios from "axios";
import { useState, useEffect } from "react";
import { ContainerBox, TagButton } from "./ReusableComp";
import { Link } from "react-router-dom";
import Modal, { ModalInput } from "./Modal";

export default function Projects() {
    const [data, setData] = useState([]);
    const [allSkills, setAllSkills] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [newProject, setNewProject] = useState({});

    const getData = async () => {
        try {
            const url = 'https://bgptsfzryd.us16.qoddiapp.com/pdata/projects/list';
            const response = await axios.get(url);
            const sorted = response.data.reverse();
            setData(sorted);
        }
        catch(error) {
            console.error('error: '+error);
        }
    };

    const getAllSkills = async () => {
        try {
            const url = 'https://bgptsfzryd.us16.qoddiapp.com/pdata/skill/list';
            const response = await axios.get(url);
            setAllSkills(response.data);
        }
        catch(error) {
            console.error('error: '+error);
        }
    };

    // const postData = async () => {
    //     try {
    //         const url = 'https://bgptsfzryd.us16.qoddiapp.com/pdata/projects/new';
    //         const response = await axios.post(url, {});
    //     } 
    //     catch (error) {
    //         console.error(error);
    //     }
    // }

    useEffect(() => {
        getData()
    }, [])

    const openModal = () => {
        setIsOpen(!isOpen);
        isOpen && getAllSkills();
    }

    return (
        <ContainerBox title="Projects" className="container" classDiv="containerbox_div" openModal={openModal}>
            {!data ? 'Loading...' : data.map( 
                    (dat) => {
                        return (
                            <section className="content" key={'p'+dat.projId}>
                                <Link to={`/projects/${dat.projId}`}>
                                    <h3 className="no_shadow">{dat.pname}</h3>
                                    <img className="project_img_s" src={dat.ppreview} alt={`${dat.pname} preview`}/>
                                </Link>
                                {dat.skills.map(
                                    (skill) => {
                                        return (
                                            <TagButton key={skill.skillName} skill={skill.skillName}/>
                                        )
                                    }
                                )}
                            </section>
                        )
                    }
                )}
            { isOpen
                && <Modal title="project" closeModal={openModal}>
                    <ModalInput htmlFor="pname" label="Project name" type="text" inputName="pname" value={newProject.pname} />
                    <ModalInput htmlFor="pdescription" label="Project description" type="text" inputName="pdescription" value={newProject.pdescription} />
                    <ModalInput htmlFor="pdescription" label="Project description" type="text" inputName="pdescription" value={newProject.pdescription} />
                    <ModalInput htmlFor="purl" label="Project URL" type="url" inputName="purl" value={newProject.purl} />
                    <ModalInput htmlFor="ppreview" label="Project preview" type="url" inputName="ppreview" value={newProject.ppreview} />
                    <ModalInput htmlFor="prepo" label="Project repository" type="url" inputName="prepo" value={newProject.prepo} />
                    <div className="checkbox_container">
                        {allSkills && allSkills.map(skill => {
                                return <ModalInput 
                                            key={skill.skillId}
                                            htmlFor={skill.skillName} 
                                            label={skill.skillName} 
                                            type="checkbox" 
                                            inputName={skill.skillName} 
                                            value={skill.skillId} />
                            })}
                    </div>
                </Modal>}
        </ContainerBox>
    )
}