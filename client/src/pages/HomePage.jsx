import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = () => {
    const URL = import.meta.env.VITE_API_URL;

    const [forms, setForms] = useState([]);
    const [deleteID, setDeleteID] = useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDeleteID(null);
    };
    // const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get(`${URL}/admission-forms`);
                setForms(resp.data.data.forms);

                // setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);
    const deleteForm = async (id) => {
        const id_toast = toast.loading("Deleting Form, please wait");
        try {
            const resp = await axios.delete(`${URL}/admission-forms/${id}`);
            console.log(resp);
            setForms(resp.data.data.forms);

            toast.update(id_toast, {
                render: "Form Deleted Successfully",
                type: "success",
                isLoading: false,
                autoClose: 2000,
            });

            setDeleteID(null);
        } catch (error) {
            toast.update(id_toast, {
                render: "Form Deletion Failed",
                type: "error",
                isLoading: false,
                autoClose: 2000,
            });
            console.log(error);
        }
    };
    const navigate = useNavigate();
    return (
        <>
            <ToastContainer />
            <div>
                <div className={styles["button-container"]}>
                    <Button
                        variant="contained"
                        sx={{ fontSize: "1.25rem" }}
                        size="large"
                        onClick={() => navigate("/admission-form")}
                    >
                        Fill Admission Form
                    </Button>
                </div>

                <div className={styles["forms-container"]}>
                    {forms.map((form) => (
                        <div
                            className={styles["form-container"]}
                            key={form._id}
                        >
                            <h2 className={styles["form-name"]}>
                                Name
                                <br />
                                {form.name}
                            </h2>
                            <h3 className={styles["aadhaar"]}>
                                Aadhaar No.
                                <br />
                                {form.aadhaarNumber}
                            </h3>
                            <h3 className={styles["class"]}>
                                Class
                                <br />
                                {form.admissionClass}
                            </h3>
                            <div className={styles["form__card-btns"]}>
                                <Button
                                    variant="contained"
                                    // sx={{ fontSize: "1.1rem" }}
                                    size="small"
                                    color="success"
                                    onClick={() =>
                                        navigate(
                                            `/admission-form/view?id=${form._id}`
                                        )
                                    }
                                >
                                    View
                                </Button>
                                <Button
                                    variant="contained"
                                    // sx={{ fontSize: "1.1rem" }}
                                    size="small"
                                    color="error"
                                    onClick={() => {
                                        setDeleteID((prev) => form);
                                        // console.log(deleteID);
                                        handleClickOpen();
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ backdropFilter: "blur(10px)" }}
            >
                <DialogTitle id="alert-dialog-title">
                    <h2>{"Are you sure you want to delete ?"}</h2>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <h3>{deleteID && deleteID.name}</h3>
                        <h3>{deleteID && deleteID.aadhaarNumber}</h3>
                        <h3>{deleteID && deleteID.admissionClass}</h3>
                    </DialogContentText>
                    <DialogActions>
                        <Button
                            variant="contained"
                            size="medium"
                            sx={{ fontSize: "1.1rem" }}
                            color="primary"
                            onClick={() => {
                                // setDeleteID((prev) => form);
                                // handleClickOpen();
                                handleClose();
                                // setDeleteID(null);
                            }}
                        >
                            No
                        </Button>
                        <Button
                            variant="contained"
                            size="medium"
                            sx={{ fontSize: "1.1rem" }}
                            color="error"
                            onClick={() => {
                                // setDeleteID((prev) => form);
                                deleteForm(deleteID._id);
                                handleClose();
                                // handleClickOpen();
                            }}
                        >
                            Yes
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default HomePage;
