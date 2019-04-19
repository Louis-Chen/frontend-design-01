import styled from 'styled-components'

const Text = styled.div`
    color:${props => (props.color ? props.color : '#202124')};

 	font-family: 'Helvetica';
    font-size: ${props => (props.size ? props.size : '24px')};
    font-weight: bold;
    font-style:${props => props.fontStyle};

	&:after {
		content: '${props => props.content}';
	}
`

const Paragragh = styled.p`
	color: ${props => (props.color ? props.color : '#202124')};

	font-family: 'Helvetica';
	font-size: ${props => (props.size ? props.size : '16px')};
`

const Hr = styled.hr`
	border-top: 2px solid #ffffff;

	color: ${props => (props.color ? props.color : '#202124')};

	margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`

const Br = styled.div`
	margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`

export { Text, Paragragh, Hr, Br }
