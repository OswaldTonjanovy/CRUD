import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBCol, MDBBtn } from 'mdbreact';

export const TableData = props => {

    const { items, onDelete, onEdit } = props;
    return (
        <MDBCol>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {items.map((item, i) => {
                        return (
                            <tr key={'key' + i}>
                                <th>{i}</th>
                                <th>{item.name}</th>
                                <th>{item.age}</th>
                                <th>{item.email}</th>
                                <th>
                                    <div className="text-center mt-4">
                                        <MDBBtn color="unique" onClick={() => onDelete(item.email)}>
                                            Delete
                                         </MDBBtn>
                                    </div>
                                </th>
                                <th>
                                    <div className="text-center mt-4">
                                        <MDBBtn color="unique" onClick={()=> onEdit(item.email) }>
                                            Edit
                                         </MDBBtn>
                                    </div>
                                </th>
                            </tr>
                        )
                    })}
            </MDBTableBody>
            </MDBTable >
        </MDBCol>
    )

};
