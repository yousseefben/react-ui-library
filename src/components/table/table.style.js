import styled, {createGlobalStyle, css} from 'styled-components';

const TableStyle = createGlobalStyle`
  .move-enter,
.move-appear {
  opacity: 0;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-play-state: paused;
}
.move-leave {
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  animation-duration: .5s;
  animation-fill-mode: both;
  animation-play-state: paused;
}
.move-enter.move-enter-active,
.move-appear.move-enter-active {
  animation-name: moveLeftIn;
  animation-play-state: running;
}
.move-leave.move-leave-active {
  animation-name: moveRightOut;
  animation-play-state: running;
}
@keyframes moveLeftIn {
  0% {
    transform-origin: 0 0;
    transform: translateX(30px);
    opacity: 0;
    background: #fff6de;
  }
  20% {
    transform-origin: 0 0;
    transform: translateX(0);
    opacity: 1;
  }
  80% {
    background: #fff6de;
  }
  100% {
    background: transparent;
    opacity: 1;
  }
}
@keyframes moveRightOut {
  0% {
    transform-origin: 0 0;
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(-30px);
    opacity: 0;
  }
}
.rc-table.bordered table {
  border-collapse: collapse;
}
.rc-table.bordered th,
.rc-table.bordered td {
  border: 1px solid #e9e9e9;
}
.rc-table {
  font-size: 12px;
  color: #666;
  transition: opacity 0.3s ease;
  position: relative;
  line-height: 1.5;
  overflow: hidden;
}
.rc-table .rc-table-scroll {
  overflow: auto;
}
.rc-table .rc-table-scroll table {
  width: auto;
  min-width: 100%;
}
.rc-table .rc-table-header {
  overflow: hidden;
  background: #f7f7f7;
}
.rc-table-fixed-header .rc-table-body {
  background: #fff;
  position: relative;
}
.rc-table-fixed-header .rc-table-body-inner {
  height: 100%;
  overflow: scroll;
}
.rc-table-fixed-header .rc-table-scroll .rc-table-header {
  padding-bottom: 20px;
  margin-bottom: -20px;
  overflow: scroll;
  box-sizing: border-box;
}
.rc-table-hide-scrollbar {
  scrollbar-color: transparent transparent;
}
.rc-table-hide-scrollbar::-webkit-scrollbar {
  background-color: transparent;
}
.rc-table-fixed-columns-in-body {
  visibility: hidden;
  pointer-events: none;
}
.rc-table .rc-table-title {
  padding: 16px 8px;
  border-top: 1px solid #e9e9e9;
}
.rc-table .rc-table-content {
  position: relative;
}
.rc-table .rc-table-footer {
  padding: 16px 8px;
  border-bottom: 1px solid #e9e9e9;
}
.rc-table .rc-table-placeholder {
  padding: 16px 8px;
  background: #fff;
  border-bottom: 1px solid #e9e9e9;
  text-align: center;
  position: relative;
}
.rc-table .rc-table-placeholder-fixed-columns {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: transparent;
  pointer-events: none;
}
.rc-table table {
  width: 100%;
  border-collapse: separate;
  text-align: left;
}
.rc-table th {
  background: #f7f7f7;
  font-weight: bold;
  transition: background .3s ease;
}
.rc-table td {
  border-bottom: 1px solid #e9e9e9;
}
.rc-table td:empty:after {
  content: '.';
  visibility: hidden;
}
.rc-table tr {
  transition: all .3s ease;
}
.rc-table tr:hover {
  background: #eaf8fe;
}
.rc-table tr.rc-table-row-hover {
  background: #eaf8fe;
}
.rc-table th,
.rc-table td {
  padding: 16px 8px;
  white-space: nowrap;
}
.rc-table-expand-icon-col {
  width: 34px;
}
.rc-table-row-expand-icon,
.rc-table-expanded-row-expand-icon {
  cursor: pointer;
  display: inline-block;
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  border: 1px solid #e9e9e9;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: #fff;
}
.rc-table-row-spaced,
.rc-table-expanded-row-spaced {
  visibility: hidden;
}
.rc-table-row-spaced:after,
.rc-table-expanded-row-spaced:after {
  content: '.';
}
.rc-table-row-expanded:after,
.rc-table-expanded-row-expanded:after {
  content: '-';
}
.rc-table-row-collapsed:after,
.rc-table-expanded-row-collapsed:after {
  content: '+';
}
tr.rc-table-expanded-row {
  background: #f7f7f7;
}
tr.rc-table-expanded-row:hover {
  background: #f7f7f7;
}
.rc-table-column-hidden {
  display: none;
}
.rc-table-prev-columns-page,
.rc-table-next-columns-page {
  cursor: pointer;
  color: #666;
  z-index: 1;
}
.rc-table-prev-columns-page:hover,
.rc-table-next-columns-page:hover {
  color: #2db7f5;
}
.rc-table-prev-columns-page-disabled,
.rc-table-next-columns-page-disabled {
  cursor: not-allowed;
  color: #999;
}
.rc-table-prev-columns-page-disabled:hover,
.rc-table-next-columns-page-disabled:hover {
  color: #999;
}
.rc-table-prev-columns-page {
  margin-right: 8px;
}
.rc-table-prev-columns-page:before {
  content: '<';
}
.rc-table-next-columns-page {
  float: right;
}
.rc-table-next-columns-page:before {
  content: '>';
}
.rc-table-fixed-left,
.rc-table-fixed-right {
  position: absolute;
  top: 0;
  overflow: hidden;
}
.rc-table-fixed-left table,
.rc-table-fixed-right table {
  width: auto;
  background: #fff;
}
.rc-table-fixed-left {
  left: 0;
  box-shadow: 4px 0 4px rgba(100, 100, 100, 0.1);
}
.rc-table-fixed-left .rc-table-body-inner {
  margin-right: -20px;
  padding-right: 20px;
}
.rc-table-fixed-header .rc-table-fixed-left .rc-table-body-inner {
  padding-right: 0;
}
.rc-table-fixed-right {
  right: 0;
  box-shadow: -4px 0 4px rgba(100, 100, 100, 0.1);
}
.rc-table-fixed-right .rc-table-expanded-row {
  color: transparent;
  pointer-events: none;
}
.rc-table.rc-table-scroll-position-left .rc-table-fixed-left {
  box-shadow: none;
}
.rc-table.rc-table-scroll-position-right .rc-table-fixed-right {
  box-shadow: none;
}

`;

export default TableStyle;
