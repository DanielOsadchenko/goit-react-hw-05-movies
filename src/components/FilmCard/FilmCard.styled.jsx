import styled from "@emotion/styled";

export const Item = styled.li`
position: relative;
transform: scale(1);
transition: all 0.2s ease;
box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);


:hover {
  transform: scale(1.05)
}
`;

export const Image = styled.img`
border-radius: 10px 10px 0px 0px;
width: 302px
display: block;
margin: 0
`;


export const Title = styled.p`
display: block;
position: absolute;
width: 100%;
background: rgba(251, 119, 86, 0.95);
font-weight: 500;
font-size: 20px;
color: #000;
padding: 10px 0;
text-align: center;
margin: 0;
bottom: 0;
left:0;
`;