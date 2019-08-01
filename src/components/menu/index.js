import React from 'react';
import PropTypes from 'prop-types';
import MyGlobalStyle from "./menu.styles";
import Menu, {Item, MenuItem, SubMenu} from "rc-menu";

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
};


const MyMenu = (props) => {
    const {

    } = props;

    return (
        <>
            <MyGlobalStyle />
            <Menu
                {...props}
            >
                {props.children}
            </Menu>

         </>

    );
};

MyMenu.propTypes = propTypes;
MyMenu.defaultProps = defaultProps;
MyMenu.SubMenu = SubMenu;
MyMenu.MenuItem = MenuItem;
MyMenu.Item = Item;

export default MyMenu;
