import { ContainerBox, ContentBoxB } from "./ReusableComp";
import { useState, useEffect } from "react";
import axios from "axios";
import { HTMLinfo } from "./SkillsInfo/HTMLInfo";
import { CSSinfo } from "./SkillsInfo/CSSInfo";
import { Bootstrapinfo } from "./SkillsInfo/BootstrapInfo";
import { Sassinfo } from "./SkillsInfo/SassInfo";
import { Javascriptinfo } from "./SkillsInfo/JavascriptInfo";
import { Reactinfo } from "./SkillsInfo/ReactInfo";
import { ReactNativeinfo } from "./SkillsInfo/ReactNativeInfo";
import { Angularinfo } from "./SkillsInfo/AngularInfo";
import { Typescriptinfo } from "./SkillsInfo/TypescriptInfo";
import { Packageinfo } from "./SkillsInfo/PMInfo";
import { Nodeinfo } from "./SkillsInfo/NodeInfo";
import { Nextinfo } from "./SkillsInfo/NextInfo";
import { Rubyinfo } from "./SkillsInfo/RubyInfo";
import { Railsinfo } from "./SkillsInfo/RailsInfo";
import { Javainfo } from "./SkillsInfo/JavaInfo";
import { SpringBootinfo } from "./SkillsInfo/SpringBootInfo";
import { Pythoninfo } from "./SkillsInfo/PythonInfo";

export default function Skills() {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const url = 'https://bgptsfzryd.us16.qoddiapp.com/pdata/skill/list';
            const response = await axios.get(url);
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
                            case 'Package managers':
                                desc = <Packageinfo/>
                                break;
                            case 'React Native':
                                desc = <ReactNativeinfo/>
                                break;
                            case 'Node.js':
                                desc = <Nodeinfo/>
                                break;
                            case 'Next.js':
                                desc = <Nextinfo/>
                                break;
                            case 'Ruby':
                                desc = <Rubyinfo/>
                                break;
                            case 'Rails':
                                desc = <Railsinfo/>
                                break;
                            case 'Java':
                                desc = <Javainfo/>
                                break;
                            case 'Spring Boot':
                                desc = <SpringBootinfo/>
                                break;
                            case 'Python':
                                desc = <Pythoninfo/>
                                break;
                            default:
                                desc = "Under construction";
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