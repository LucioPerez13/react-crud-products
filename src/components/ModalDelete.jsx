import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

export const ModalDelete = ({ modalEliminar, productoSeleccionado, eliminar, setModalEliminar }) => {
    return (
        <Modal isOpen={modalEliminar}>
            <ModalBody>Estás Seguro que deseas eliminar el producto {productoSeleccionado && productoSeleccionado.nombre}</ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={() => eliminar()}>
                    Si
                </button>
                <button className="btn btn-secondary" onClick={() => setModalEliminar(false)}>
                    No
                </button>
            </ModalFooter>
        </Modal>
    );
};
