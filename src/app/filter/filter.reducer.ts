
import { filtrosValidos, acciones, AcctionTypeFilter} from "./filter.acction";

const estadoInicial:filtrosValidos  = "todos";


export function filterReducer(state = estadoInicial, 
    accion: acciones):filtrosValidos {
       console.log(accion);
    switch(accion.type){
        case AcctionTypeFilter.SET_FILTER:
            return accion.filtro;
        default:
            return state;
    }
}