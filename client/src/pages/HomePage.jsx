import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = () => {
    const URL = import.meta.env.VITE_API_URL;
    const [admissionClass, setAdmissionClass] = useState();
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
                    <Button
                        variant="contained"
                        sx={{ fontSize: "1.25rem" }}
                        size="large"
                        onClick={() => navigate("/id-card-form")}
                    >
                        Fill ID Card Forms
                    </Button>
                </div>

                <div className={styles["admission-class-menu"]}>
                    <h2>Select A Class to View forms</h2>
                    <AdmissionClassSelector
                        admissionClass={admissionClass}
                        setAdmissionClass={setAdmissionClass}
                    />
                </div>
                <div className={styles["forms-container"]}>
                    {forms.map((form) => {
                        if (admissionClass !== form.admissionClass) return null;
                        else
                            return (
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
                            );
                    })}
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

const AdmissionClassSelector = ({ setAdmissionClass, admissionClass }) => (
    <FormControl sx={{ width: "20rem" }}>
        <InputLabel id="demo-simple-select-label">Select Class</InputLabel>
        <Select
            value={admissionClass}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Select Class"
            // onChange={handleChange}
            onChange={(e) => {
                setAdmissionClass(e.target.value);
            }}
        >
            <MenuItem value="NUR">NURSERY</MenuItem>
            <MenuItem value="LKG">LKG</MenuItem>
            <MenuItem value="UKG">UKG</MenuItem>
            <MenuItem value="I">I</MenuItem>
            <MenuItem value="II">II</MenuItem>
            <MenuItem value="III">III</MenuItem>
            <MenuItem value="IV">IV</MenuItem>
            <MenuItem value="V">V</MenuItem>
            <MenuItem value="VI">VI</MenuItem>
            <MenuItem value="VII">VII</MenuItem>
            <MenuItem value="VIII">VIII</MenuItem>
            <MenuItem value="IX">IX</MenuItem>
            <MenuItem value="X">X</MenuItem>
        </Select>
    </FormControl>
);
