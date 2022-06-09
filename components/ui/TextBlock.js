import styled from 'styled-components';

const Block = styled.div`
  max-width: 30rem;
  width:100%;
  text-align:left;
`

const TextBlock = (props) => {
  return <Block>
    {props.children}
  </Block>
}

export default TextBlock;