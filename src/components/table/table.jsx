import React from 'react';
import PropTypes from 'prop-types';
import Table from "rc-table";
import TableStyle from "./table.style";

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
};


const MyTable = (props) => {
    const {

    } = props;

    return (
        <>
            <TableStyle />
            <Table
                {...props}
            >
                {props.children}
            </Table>

        </>

    );
};


export default MyTable;
