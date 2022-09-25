import { useState, useEffect } from "react";
import axios from "axios";
import { ContainerBox, ContentBox } from "./ReusableComp";

export default function Contact() {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const url = 'http://pzxrslcdua.us09.qoddiapp.com/pdata/user/1/search';
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

    const codePenIcon = "https://i.ibb.co/ZzLpcW5/cpenico2.png";

    return (
            <ContainerBox title="Contact" className="container" classDiv="contact_container">
                <ContentBox className={'content'} href={"mailto:"+data.email} name="Email" icon={<i className="bi bi-envelope-fill"></i>} />
                <ContentBox className={'content'} href={data.phone} name="WhatsApp" icon={<i className="bi bi-whatsapp"></i>}/>
                <ContentBox className={'content'} href={data.gitHub} name="GitHub" icon={<i className="bi bi-github"></i>}/>
                <ContentBox className={'content'} href={data.codePen} name="CodePen" icon={<img src={codePenIcon} alt="codepen" id="cpico"/>}/>
                <ContentBox className={'content'} href={"https://discord.com/channels/"+data.discord} name="Discord" icon={<i className="bi bi-discord"></i>}/>
                <ContentBox className={'content'} href={data.linkedIn} name="LinkedIn" icon={<i className="bi bi-linkedin"></i>}/>
                <ContentBox className={'content'} href={data.facebook} name="Facebook" icon={<i className="bi bi-facebook"></i>}/>
                <ContentBox className={'content'} href={data.twitter} name="Twitter" icon={<i className="bi bi-twitter"></i>}/>
                <ContentBox className={'content'} href={data.instagram} name="Instagram" icon={<i className="bi bi-instagram"></i>}/>
            </ContainerBox>
    )
}