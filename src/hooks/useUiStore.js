import { useDispatch, useSelector } from "react-redux"
import { onOpenDateModal, onCloseDateModal } from "../store";

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isDateModalOpen
    } =useSelector( state => state.ui );

    const openDateModal = () => {
        dispatch( onOpenDateModal() )
    };

    const CloseDateModal = () => {
        dispatch( onCloseDateModal() )
    };

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : CloseDateModal();
    }

    return {
        //propiedades
        isDateModalOpen,

        //metodos
        openDateModal,
        CloseDateModal,
        toggleDateModal,
    }
}