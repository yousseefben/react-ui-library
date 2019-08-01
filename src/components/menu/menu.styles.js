import styled, {createGlobalStyle, css} from 'styled-components';
import Menu from "rc-menu";

const menu = 'rc-menu';
// theme is also fully typed
const MyGlobalStyle = createGlobalStyle`
  .${menu} {
  outline: none;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  border: 1px solid #d9d9d9;
  box-shadow: 0 0 4px #d9d9d9;
  border-radius: 3px;
  color: #666;
  
  &.${menu}-hidden {
    display: none;
  }
  &.${menu}-collapse {
    overflow: hidden;;
  }
  &.${menu}-collapse-active {
    transition: height 0.3s ease-out;
  }
  & > .rc-menu-item-divider {
  height: 1px;
  margin: 1px 0;
  overflow: hidden;
  padding: 0;
  line-height: 0;
  background-color: #e5e5e5;
    }
  
  & .${menu}-item-active,
  & .${menu}-submenu-active > .${menu}-submenu-title {
      background-color: #eaf8fe;
  }
  & .${menu}-item-selected {
    background-color: #eaf8fe;
    transform: translateZ(0);
  }
    & .${menu}-submenu-selected {
  background-color: #eaf8fe;
  }
.& > li.rc-menu-submenu {
  padding: 0;
}
&.${menu}-horizontal.${menu}-sub,
&.${menu}-vertical.${menu}-sub,
&.${menu}-vertical-left.${menu}-sub,
&.${menu}-vertical-right.${menu}-sub {
  min-width: 160px;
  margin-top: 0;
}
& .${menu}-item,
$ .${menu}-submenu-title {
  margin: 0;
  position: relative;
  display: block;
  padding: 7px 7px 7px 16px;
  white-space: nowrap;
}
& .${menu}-item.${menu}-item-disabled,
.${menu}-submenu-title.${menu}-item-disabled,
.${menu}-item.rc-menu-submenu-disabled,
.${menu}-submenu-title.${menu}-submenu-disabled {
  color: #777 !important;
}
& > .${menu}-item-divider {
  height: 1px;
  margin: 1px 0;
  overflow: hidden;
  padding: 0;
  line-height: 0;
  background-color: #e5e5e5;
}
& .${menu}-submenu-popup {
  position: absolute;
}
& .${menu}-submenu-popup .submenu-title-wrapper {
  padding-right: 20px;
}
& .${menu}-submenu > .${menu} {
  background-color: #fff;
}
& .${menu}-submenu-title .anticon,
& .${menu}-item .anticon {
  width: 14px;
  height: 14px;
  margin-right: 8px;
  top: -1px;
}
&.${menu}-horizontal {
  background-color: #F3F5F7;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  box-shadow: none;
  white-space: nowrap;
  overflow: hidden;
}
&.${menu}-horizontal > .${menu}-item,
&.${menu}-horizontal > .${menu}-submenu > .${menu}-submenu-title {
  padding: 15px 20px;
}
&.${menu}-horizontal > .${menu}-submenu,
&.${menu}-horizontal > .${menu}-item {
  border-bottom: 2px solid transparent;
  display: inline-block;
  vertical-align: bottom;
}
&.${menu}-horizontal > .${menu}-submenu-active,
&.${menu}-horizontal > .${menu}-item-active {
  border-bottom: 2px solid #2db7f5;
  background-color: #F3F5F7;
  color: #2baee9;
}
&.${menu}-horizontal:after {
  content: "\\20";
  display: block;
  height: 0;
  clear: both;
}
&.${menu}-vertical,
&.${menu}-vertical-left,
&.${menu}-vertical-right,
&.${menu}-inline {
  padding: 12px 0;
}
&.${menu}-vertical > .${menu}-item,
&.${menu}-vertical-left > .${menu}-item,
&.${menu}-vertical-right > .${menu}-item,
&.${menu}-inline > .${menu}-item,
&.${menu}-vertical > .${menu}-submenu > .${menu}-submenu-title,
&.${menu}-vertical-left > .${menu}-submenu > .${menu}-submenu-title,
&.${menu}-vertical-right > .${menu}-submenu > .${menu}-submenu-title,
&.${menu}-inline > .${menu}-submenu > .${menu}-submenu-title {
  padding: 12px 8px 12px 24px;
}
&.${menu}-vertical .${menu}-submenu-arrow,
&.${menu}-vertical-left .${menu}-submenu-arrow,
&.${menu}-vertical-right .${menu}-submenu-arrow,
&.${menu}-inline .${menu}-submenu-arrow {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
  position: absolute;
  right: 16px;
  line-height: 1.5em;
}
&.${menu}-vertical .${menu}-submenu-arrow:before,
&.${menu}-vertical-left .${menu}-submenu-arrow:before,
&.${menu}-vertical-right .${menu}-submenu-arrow:before,
&.${menu}-inline .${menu}-submenu-arrow:before {
  content: "\f0da";
}
&.${menu}-inline .${menu}-submenu-arrow {
  transform: rotate(90deg);
  transition: transform .3s;
}
&.${menu}-inline .${menu}-submenu-open > .${menu}-submenu-title .${menu}-submenu-arrow {
  transform: rotate(-90deg);
}
&.${menu}-vertical.${menu}-sub,
&.${menu}-vertical-left.${menu}-sub,
&.${menu}-vertical-right.${menu}-sub {
  padding: 0;
}
& .${menu}-sub.${menu}-inline {
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
& .${menu}-sub.${menu}-inline > .${menu}-item,
& .${menu}-sub.${menu}-inline > .${menu}-submenu > .${menu}-submenu-title {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 0;
}
& .${menu}-open-slide-up-enter,
& .${menu}-open-slide-up-appear {
  animation-duration: .3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  animation-play-state: paused;
}
& .${menu}-open-slide-up-leave {
  animation-duration: .3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  opacity: 1;
  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  animation-play-state: paused;
}
& .${menu}-open-slide-up-enter.${menu}-open-slide-up-enter-active,
& .${menu}-open-slide-up-appear.${menu}-open-slide-up-appear-active {
  animation-name: rcMenuOpenSlideUpIn;
  animation-play-state: running;
}
& .${menu}-open-slide-up-leave.${menu}-open-slide-up-leave-active {
  animation-name: rcMenuOpenSlideUpOut;
  animation-play-state: running;
}
}
`;

export default MyGlobalStyle;
