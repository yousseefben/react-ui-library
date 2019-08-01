
import styled, { keyframes, css } from 'styled-components';
import { getLuminance, transparentize, lighten } from 'polished';

const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Label = styled.div`
  display: inline-block;
  vertical-align: middle;
  ${(props) => { if (props.labelPos === 'right') return 'margin-left: 10px'; return 'margin-right: 10px'; }}
  ${props => props.darkBg && css`color: white`};
`;
export const Loader = styled.div`
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-color: transparent;
  border-left: 1px solid white;
  transform: translateZ(0);
  animation: ${spinner} 1s infinite linear;
  &:after {
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }`;
