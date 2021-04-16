import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { useForm } from "react-hook-form";
import { ModalCreate } from "./components/ModalCreate";
import { ModalUpdate } from "./components/ModalUpdate";
import { ModalDelete } from "./components/ModalDelete";

const CrudProducts = () => {
    const dataProductos = [
        { id: 1, nombre: "Samusng galaxy 10", precio: 24900.0 },
        { id: 2, nombre: "Xioami mi 10 lite", precio: 9250.0 },
        { id: 3, nombre: "Huawei mate 10", precio: 4500.0 },
        { id: 4, nombre: "Sony xperia 8", precio: 216 },
        { id: 5, nombre: "Xbox series x", precio: 8499.5 },
        { id: 6, nombre: "Cargador Universal", precio: 350.0 },
        { id: 7, nombre: "PS4", precio: 14500.0 },
        { id: 8, nombre: "Iphone 10", precio: 22300.0 },
        { id: 9, nombre: "Xiaomi mi 9t", precio: 12300.99 },
        { id: 10, nombre: "Disco duro SSD 1T", precio: 1500.0 },
    ];

    /*  const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm(); */

    const [data, setData] = useState(dataProductos);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);

    const [productoSeleccionado, setProductoSeleccionado] = useState({
        id: "",
        nombre: "",
        precio: "",
    });

    const openModalInsertar = () => {
        setProductoSeleccionado(productoSeleccionado);
        setModalInsertar(true);
    };

    const seleccionarProducto = (elemento, caso) => {
        setProductoSeleccionado(elemento);
        caso === "U" ? setModalEditar(true) : setModalEliminar(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setProductoSeleccionado((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const insertar = () => {
        let valorInsertar = productoSeleccionado;
        valorInsertar.id = data[data.length - 1].id + 1;
        let dataNueva = data;
        dataNueva.push(valorInsertar);
        setData(dataNueva);
        setModalInsertar(false);
    };

    const editar = () => {
        let dataNueva = data;
        dataNueva.map((prod) => {
            if (prod.id === productoSeleccionado.id) {
                prod.precio = productoSeleccionado.precio;
                prod.nombre = productoSeleccionado.nombre;
            }
        });
        setData(dataNueva);
        setModalEditar(false);
    };

    const eliminar = () => {
        setData(data.filter((prod) => prod.id !== productoSeleccionado.id));
        setModalEliminar(false);
    };

    return (
        <div className="card col-12">
            <h2>Productos</h2>
            <br />
            <button className="btn btn-success" onClick={() => openModalInsertar()}>
                Agregar
            </button>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((elemento, i) => (
                        <tr key={i}>
                            <td>{elemento.id}</td>
                            <td>{elemento.nombre}</td>
                            <td>{elemento.precio}</td>
                            <td>
                                <button
                                    className="btn btn-primary mr-2"
                                    onClick={() => seleccionarProducto(elemento, "U")}
                                >
                                    Editar
                                </button>
                                <button className="btn btn-danger" onClick={() => seleccionarProducto(elemento, "D")}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ModalCreate
                modalInsertar={modalInsertar}
                data={data}
                handleChange={handleChange}
                insertar={insertar}
                productoSeleccionado={productoSeleccionado}
                setModalInsertar={setModalInsertar}
            />
            <ModalUpdate
                modalEditar={modalEditar}
                productoSeleccionado={productoSeleccionado}
                handleChange={handleChange}
                setModalEditar={setModalEditar}
                editar={editar}
            />
            <ModalDelete
                modalEliminar={modalEliminar}
                productoSeleccionado={productoSeleccionado}
                eliminar={eliminar}
                setModalEliminar={setModalEliminar}
            />
        </div>
    );
};

export default CrudProducts;
