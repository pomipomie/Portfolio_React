import { ContainerBox, ContentBoxB } from "./ReusableComp";
import { useState, useEffect } from "react";
import axios from "axios";
import { HTMLinfo } from "./SkillsInfo/HTMLInfo";
import { CSSinfo } from "./SkillsInfo/CSSInfo";
import { Bootstrapinfo } from "./SkillsInfo/BootstrapInfo";
import { Sassinfo } from "./SkillsInfo/SassInfo";
import { Javascriptinfo } from "./SkillsInfo/JavascriptInfo";
import { Reactinfo } from "./SkillsInfo/ReactInfo";
import { Angularinfo } from "./SkillsInfo/AngularInfo";
import { Typescriptinfo } from "./SkillsInfo/TypescriptInfo";

export default function Skills() {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const url = 'pdata/skill/list';
            const response = await axios.get(url);
            // console.log(response.data);
            setData(response.data);
        }
        catch(error) {
            console.error('error: '+error);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    let desc = "";

    return (
            <ContainerBox title="Skills" className="container" classDiv="containerbox_div">
                {!data ? 'Loading...' : data.map(
                    (dat, index) => {
                        switch (dat.skillName) {
                            case 'HTML':
                                desc = <HTMLinfo/>;
                                break;
                            case 'CSS':
                                desc = <CSSinfo/>;
                                break;
                            case 'Bootstrap':
                                desc = <Bootstrapinfo/>
                                break;
                            case 'Sass':
                                desc = <Sassinfo/>
                                break;
                            case 'JavaScript':
                                desc = <Javascriptinfo/>
                                break;
                            case 'React':
                                desc = <Reactinfo/>
                                break;
                            case 'Angular':
                                desc = <Angularinfo/>
                                break;
                            case 'TypeScript':
                                desc = <Typescriptinfo/>
                                break;
                            default:
                                desc = "";
                                break;
                        }
                        return (
                            <ContentBoxB 
                                key={'s'+dat.skillId}
                                id={'s'+dat.skillId}
                                className={'content'}
                                name={dat.skillName} 
                                level={dat.skillLevel} 
                                desc={desc}
                             />
                        )
                    }
                )}
            </ContainerBox>
            )
}