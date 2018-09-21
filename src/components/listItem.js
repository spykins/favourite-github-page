import React from 'react';
import { Table } from 'react-bootstrap';
import "./listitem.css";

export default () => {
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
                    <td><a href="a">Add</a></td>

                </tr>
            </tbody>
        </Table>
    );
}

