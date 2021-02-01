import React, { useState } from 'react'
import { Button, Container, Menu, MenuItem, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { MoreVert, Delete } from '@material-ui/icons'

const Import = (props) => {

    const [anchorEl, setAnchorEl] = useState(null)
    const [deletedMake, setDeletedMake] = useState(null)


    const handleClick = (index) => (event) => {
        setAnchorEl(event.currentTarget)
        setDeletedMake(index)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (index) => {
        props.deleteMake(deletedMake, index)
        setAnchorEl(null)
    }

    return (
        <Container style={{ marginTop: "2rem", textAlign: "center" }} maxWidth="md">
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
            <h2>{`COUNT: ${props.makes.length}`}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Vehicle Type</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>{make.VehicleTypeName}</TableCell>
                                <TableCell>
                                    <Button>
                                        <MoreVert aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick(index)} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleDelete}><Delete />Delete</MenuItem>
            </Menu>
        </Container >
    )
}

export default Import