import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "./listitem.css";

const ListItem =  (props) => {
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
                    {
                            props.isFavourite && props.isOnFavouriteList
                            && <td><a href="a">{props.isFavourite ? "remove" : "Add"}</a></td>
                    }

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