import { useEffect } from "react";

function Panel(){
    useEffect(()=>{
        document.title = "Panel de Administracion"
    })

    return(
        <>
            <h1 className="bg-red-100">Bienvenidos al panel</h1>
            <table>
                <tr>
                    <th></th>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
        </>
    )
}


export default Panel;