import styled from "styled-components"

export const Botaoq = styled.button `

position: absolute;
width: ${props=> props.width};
height: ${props=> props.height};
left: ${props=> props.left};
top: ${props=> props.top};

color:white;
font-family:Helvetica, sans-serif;
font-weight:bold;
font-size:36px;
text-align: center;
text-decoration:none;

background-color:${props=> props.background};

padding:20px 40px;

-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
text-shadow: 0px 1px 0px #000;
filter: dropshadow(color=#000, offx=0px, offy=1px);

-webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
-moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #005036;

-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 5px;
}

&:active{
top: ${props=> (parseInt(props.top)+10)+"px"};
background-color:${props=> props.background};

-webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
-moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #915100;
box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
}

&:after{
content:"";
height:100%;
width:100%;
padding:4px;
position: absolute;
bottom:-15px;
left:-4px;
z-index:-1;
background-color:#2B1800;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 5px;
}

  
`