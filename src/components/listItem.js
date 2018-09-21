import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "./listitem.css";

const ListItem =  (props) => {
    let listInformation = null; 
    if (props.isFavourite && props.isOnFavouriteList) {
        listInformation = <td><a href="a">remove</a></td>;
    } else if (!props.isFavourite) {
        listInformation = <td><a href="a">add</a></td>;
    }

    return (
        
        <Table responsive className="table-header">
            <thead>
                <tr>
                     <th>Name</th>
                    <th>Language</th>
                    <th>Latest tag</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {listInformation}

                </tr>
            </tbody>
        </Table>
    );
}

ListItem.propTypes = {

  isFavourite: PropTypes.bool.isRequired,
  isOnFavouriteList: PropTypes.bool.isRequired,
}

export default ListItem;