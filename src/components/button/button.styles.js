import styled, { css } from 'styled-components';
import {lighten} from "polished";


const Container = styled.button`
  font-size: 12px;
  text-align: center;
  text-shadow: 0 -1px 0 rgba(0,0,0,0.04);
  border: 1px solid transparent;
  padding: 4px 15px;
  line-height: 1.499;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);;
  svg {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
   ${props => props.loading && css`
    padding-left: 5px;
   `}
  ${props => props.type === 'primary' && css`background-color: ${props.theme.colors.primary}; color: ${props.theme.colors.white}; border: none;`};
  ${props => props.type === 'default' && css`background-color: transparent; color: ${props.theme.colors.gray}; border: 1px solid ${props.theme.colors.border};`};
  ${props => props.type === 'danger' && css`background-color: ${lighten(0.05, props.theme.colors.border)}; color: ${props.theme.colors.danger}; border: 1px solid ${props.theme.colors.border};`};

   &:hover, &:focus {
   transition: opacity .2s;
    transition-property: opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
        ${props => css`
            ${props.type === 'default' && css `color: ${lighten(0.1, props.theme.colors.primary)}; border-color: ${lighten(0.1, props.theme.colors.primary)}`}
            ${props.type === 'danger' && css `color: ${lighten(0.1, props.theme.colors.white)}; border-color: ${props.theme.colors.danger}; background-color: ${props.theme.colors.danger}`}
          ${props.type === 'primary' && lighten(0.1, props.theme.colors.primary) && css`radial-gradient(circle, transparent 1%, ${props.theme.colors.primary} 1%) center/15000%`};
        svg { stroke: ${props.theme.colors.white}; }
        outline: 0;
        
    `}
      }
   &:active {
    ${props => css` 
        background-color: ${props.theme.colors[props.type] !== undefined && lighten(0.1, props.theme.colors[props.type])};
        `
    }
    }
  ${props => props.disabled && css`
    opacity: .5;
    pointer-events: none;
  `}
`;
export default Container;
