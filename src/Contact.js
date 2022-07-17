import { useState, useEffect } from "react";
import axios from "axios";
import { ContainerBox, ContentBox } from "./ReusableComp";

export default function Contact() {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const url = 'pdata/user/1/search';
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

    const codePenIcon = "https://i.ibb.co/ZzLpcW5/cpenico2.png";

    return (
           <ContainerBox title="Contact">
                <ContentBox href={"mailto:"+data.email} name="Email" />
                <ContentBox href={data.phone} name="WhatsApp" />
                <ContentBox href={data.gitHub} name="GitHub" />
                <ContentBox href={data.codePen} name="CodePen" icon={<img src={codePenIcon} alt="codepen" id="cpico"/>}/>
                <ContentBox href={data.discord} name="Discord" />
                <ContentBox href={data.linkedIn} name="LinkedIn" />
                <ContentBox href={data.facebook} name="Facebook" />
                <ContentBox href={data.twitter} name="Twitter" />
                <ContentBox href={data.instagram} name="Instagram" />
            </ContainerBox>
    )
}