import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React from "react";

export const ModalCreate = ({
    modalInsertar,
    data,
    setModalInsertar,
    handleChange,
    insertar,
    productoSeleccionado,
}) => {

    return (
        <Modal isOpen={modalInsertar}>
            <ModalHeader>
                <div>
                    <h3>Producto</h3>
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
                            value={data[data.length - 1].id + 1}
                        />
                        <br />

                        <label>Producto</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nombre"
                            value={productoSeleccionado ? productoSeleccionado.nombre : ""}
                            onChange={handleChange}
                        />
                        <br />

                        <label>Precio</label>
                        <input
                            className="form-control"
                            type="number"
                            name="precio"
                            value={productoSeleccionado ? productoSeleccionado.precio : ""}
                            onChange={handleChange}
                        />
                        <br />
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-primary" onClick={() => insertar()}>
                    Insertar
                </button>
                <button className="btn btn-danger" onClick={() => setModalInsertar(false)}>
                    Cancelar
                </button>
            </ModalFooter>
        </Modal>
    );
};
