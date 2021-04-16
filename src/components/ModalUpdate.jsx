import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const ModalUpdate = ({ modalEditar, productoSeleccionado, handleChange, editar, setModalEditar }) => {
    return (
        <Modal isOpen={modalEditar}>
            <ModalHeader>
                <div>
                    <h3>Editar Producto</h3>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <form>
                        <input
                            className="form-control"
                            readOnly
                            type="hidden"
                            name="id"
                            value={productoSeleccionado && productoSeleccionado.id}
                        />
                        <br />

                        <label>Descripcion</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nombre"
                            value={productoSeleccionado && productoSeleccionado.nombre}
                            onChange={handleChange}
                        />
                        <br />

                        <label>Precio</label>
                        <input
                            className="form-control"
                            type="number"
                            name="precio"
                            value={productoSeleccionado && productoSeleccionado.precio}
                            onChange={handleChange}
                            required
                        />
                    </form>
                    <br />
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-primary" onClick={() => editar()}>
                    Actualizar
                </button>
                <button className="btn btn-danger" onClick={() => setModalEditar(false)}>
                    Cancelar
                </button>
            </ModalFooter>
        </Modal>
    );
};
