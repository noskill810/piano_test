import styled from "styled-components";

export const Profile = (props: any) => {
    
    const name = props.profile.name;
    const country = props.profile.country
    const birthday = props.profile.birthday;

    console.log(props);

    return(
        <Sdiv>
            <h4>{name}</h4>
            <p>{country} <br /> {birthday}</p>
        </Sdiv>
    )
};

const Sdiv = styled.div`
    position: absolute;
    top: -10px;
    left: -10px;
`