
"use client";
import { useMks } from "@/app/Context/MksContext";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Fragment } from "react";

const ModalTank = () => {
    const { open, onOpenModal, clearLocalStorageAndScroll} = useMks();
 
    const handleClearLocalStorage = () => {
        onOpenModal(false);
        window.location.reload();
        clearLocalStorageAndScroll();
    }

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={() => onOpenModal(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Obrigado por comprar conosco!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Volte sempre!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClearLocalStorage()} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default ModalTank;
