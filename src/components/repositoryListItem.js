import React from 'react';
import PropTypes from 'prop-types';
import "./repositoryListItem.css";

const ListItem = (props) => {
    let listInformation = null;
    if (props.isFavourite && props.isOnFavouriteList) {
        listInformation = <td><a href="a">remove</a></td>;
    } else if (!props.isFavourite) {
        listInformation = <td><a href="a">add</a></td>;
    }

    return (

        <tr>
            <th><a href={props.url} target="_blank">{props.name}</a></th>
            <th>{props.language}</th>
            <th>{props.tag}</th>
            {listInformation}
        </tr>
    );
}

ListItem.propTypes = {

    isFavourite: PropTypes.bool.isRequired,
    isOnFavouriteList: PropTypes.bool.isRequired,
}

export default ListItem;