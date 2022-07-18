import { ContainerBox, ContentBoxB } from "./ReusableComp";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Skills() {

    const [data, setData] = useState([]);
    const [lastChild, setLastChild] = useState('not-toggle');

    const getData = async () => {
        try {
            const url = 'pdata/skill/list';
            const response = await axios.get(url);
            console.log(response.data);
            setData(response.data);
        }
        catch(error) {
            console.error('error: '+error);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    let print = '';

    // const toggleInfo = useCallback( () => {
    //     console.log(print);
    //     //print.lastChild === 'not-toggle' ? setLastChild('toggle') : setLastChild('not-toggle')}
    // }, [],)

    let desc = "";

    // const toggleIcon = document.getElementsByClassName('bi-caret-down-li');
    // const showInfo = document.getElementById({this.id});
    // const handleClick = () => {
    //     console.log('clicked');
    //     console.log('this is:', this);
    //     // toggleIcon.className = 'bi-caret-down-li';
    //     // showInfo.style.display = 'block';
    // }

    const changeClass = () => {
        lastChild === 'not-toggle' ? setLastChild('toggle') : setLastChild('not-toggle')
    };

    return (
            <ContainerBox title="Skills" className="container">
                {!data ? 'Loading...' : data.map(
                    (dat, index) => {
                        switch (dat.skillName) {
                            case 'HTML':
                                desc = 'html info';
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
                                lastChild={lastChild}
                                handleClick={() => {
                                    print = document.getElementById(`${'s'+dat.skillId}`);
                                    console.log(print.lastChild);
                                    changeClass(print);
                                }} />
                        )
                    }
                )}
            </ContainerBox>
            )
}