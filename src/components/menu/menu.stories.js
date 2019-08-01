import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from "./index"

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.MenuItem;
const Item = Menu.Item;

storiesOf('Menu', module)
    .add('default menu', () => (
        <div>
                <div>
                <Menu mode={'horizontal'}  triggerSubMenuAction="click">
                        <MenuItem key={'0'}>1</MenuItem>
                        <MenuItem key={'100'}>1</MenuItem>
                        <SubMenu title="2">
                                <Item key={'1'}>2-1</Item>
                                <Item key={'2'}>3-1</Item>
                        </SubMenu>
                </Menu>
                </div>
                <div>
                <Menu mode={'inline'} >
                        <MenuItem key={'0'}>1</MenuItem>
                        <MenuItem key={'100'}>1</MenuItem>
                        <SubMenu>
                                <Item key={'10'}>2-1</Item>
                                <Item key={'20'}>3-1</Item>
                        </SubMenu>
                </Menu>
                </div>
        </div>
    ));
