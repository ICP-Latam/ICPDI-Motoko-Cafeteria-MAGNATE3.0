import { useCanister } from "@connect2ic/react";
import React, { useState } from "react";

function CafeteriaItemProd (props) {
    const { Producto , refresh} = props;

    const [cafeteria_magnate_backend] = useCanister("cafeteria_magnate_backend");

    const [nombrep,setnombrep] = useState(Producto[1].nombrep)
    const [descripcion,setdescripcion] = useState(Producto[1].descripcion)
    const [existencia,setexistencia] = useState(Producto[1].existencia)
    const [caducidad,setcaducidad] = useState(Producto[1].caducidad)
    const [marca,setmarca] = useState(Producto[1].marca)
    const [precio,setprecio] = useState(Producto[1].precio)

    const [visible, setVisible] = useState(false);

    const [update, setUpdate] = useState(false);


    const handleUpdateProd = async (producto) => {
        producto.preventDefault();

        try {
            await cafeteria_magnate_backend.actualizarProducto(
                Producto[0],
                nombrep,
                descripcion,
                existencia,
                caducidad,
                marca,
                precio);
            await refresh();
        } catch(e) {
            console.log(e);
        } finally {
            setVisible(false);
        }
    }

    const handleDeleteProd = async (producto) => {
        producto.preventDefault();
        try {
            await cafeteria_magnate_backend.eliminarProducto(Producto[0]);
            await refresh();
        } catch(e) {
            console.log(e);
        } finally {
            setVisible(false);
        }
    }

  return (
    <div>
        <div>
        <br></br><label>Producto: {nombrep}</label>
        <br></br><br></br><label id="modal-items-text">Introduce el nombre</label>
        <br></br><input id="nombreEv" className="modal-items2" placeholder='Nombre' value={nombrep} onChange={(e) => setnombrep(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la descripcion</label>
        <br></br><input id="descripcion" className="modal-items2" placeholder='Descripcion' value={descripcion} onChange={(e) => setdescripcion(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la existencia</label>
        <br></br><input id="precio" className="modal-items2" placeholder='Existencia' value={existencia} onChange={(e) => setexistencia(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la fecha de caducidad</label>
        <br></br><input id="reservacion" className="modal-items2" placeholder='Caducidad' value={caducidad} onChange={(e) => setcaducidad(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la marca</label>
        <br></br><input id="fecha" className="modal-items2" placeholder='Marca' value={marca} onChange={(e) => setmarca(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el precio</label>
        <br></br><input id="hora" className="modal-items2" placeholder='Precio' value={precio} onChange={(e) => setprecio(e.target.value)}/>
        <br></br><br></br>
        
        <div style={{display:'flex' ,flexDirection:'row'}}>
        <button  id='button'onClick={handleUpdateProd}>Actualizar</button>
                <button id='button' onClick={handleDeleteProd}>Borrar</button>
        </div>
        </div> 
    </div>
  )
}

export default CafeteriaItemProd;