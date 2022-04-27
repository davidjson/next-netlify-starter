import styled from "styled-components";
import { color } from "styled-system";

interface IProps {
  bg?: string | null;
}

const Box = styled.div<IProps>`
  ${color}
`;

export default Box;
