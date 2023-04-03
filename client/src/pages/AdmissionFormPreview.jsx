import React, { useEffect, useRef, useState } from "react";
import styles from "./AdmissionForm.module.css";
import { Button, TextField } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdmissionForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formSubmitting, setFormSubmitting] = useState(false);
    useEffect(() => window.scrollTo(0, 0), []);
    const {
        name,
        imageSrc,
        gender,
        dob,
        fatherName,
        motherName,
        fatherOccupation,
        fatherQualification,
        motherOccupation,
        motherQualification,
        address,
        language,
        religion,
        category,
        nationality,
        admissionClass,
        aadhaarNumber,
        srNumber,
        inabilities,
        admissionDate,
        receiptNumber,
        phoneNumber,
    } = location.state;

    const editFormHandler = () => {
        navigate("/admission-form", {
            state: {
                name,
                imageSrc,
                gender,
                dob,
                fatherName,
                motherName,
                fatherOccupation,
                fatherQualification,
                motherOccupation,
                motherQualification,
                address,
                language,
                religion,
                category,
                nationality,
                admissionClass,
                aadhaarNumber,
                srNumber,
                inabilities,
                admissionDate,
                receiptNumber,
                phoneNumber,
            },
        });

        // navigate();
    };
    // console.log(imageSrc);

    const handleFormSubmit = async () => {
        setFormSubmitting(true);
        const URL = import.meta.env.VITE_API_URL;
        const id_toast = toast.loading("Saving Form, please wait");

        try {
            const resp = await axios.post(`${URL}/admission-forms`, {
                name,
                imageSrc,
                gender,
                dob,
                fatherName,
                motherName,
                fatherOccupation,
                fatherQualification,
                motherOccupation,
                motherQualification,
                address,
                language,
                religion,
                category,
                nationality,
                admissionClass,
                aadhaarNumber,
                srNumber,
                inabilities,
                admissionDate,
                receiptNumber,
                phoneNumber,
            });
            // let form;

            toast.update(id_toast, {
                render: "Form Saved Successfully",
                type: "success",
                isLoading: false,
                autoClose: 1500,
            });

            setTimeout(() => {
                navigate(`/admission-form/view?id=${resp.data.data.form._id}`, {
                    state: resp.data.data.form,
                });
            }, 1500);
            setFormSubmitting(false);
        } catch (err) {
            console.log(err);
            setFormSubmitting(false);
            toast.update(id_toast, {
                render: "Form Saving Error",
                type: "error",
                isLoading: false,
                autoClose: 1500,
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <main className={styles["main-container"]}>
                <h1 className={styles["main-heading"]}>
                    Admission Form Preview
                </h1>
                <form className={styles["form"]}>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Aadhaar Number
                            </div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={aadhaarNumber}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Scholar Reg. No.
                            </div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={srNumber}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Name</div>

                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                // fullWidth
                                value={name}
                                sx={{ width: "50vw" }}
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={styles["form__group"]}
                            // style={{ alignSelf: "start" }}
                        >
                            <div className={styles["label"]}>Photo </div>
                            {imageSrc && (
                                <img
                                    src={imageSrc}
                                    width="125px"
                                    height="auto"
                                    alt="img"
                                />
                            )}
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Gender</div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={gender}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Date of Birth</div>

                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={dob}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Father/Guardian's Name
                            </div>

                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={fatherName}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Mother's Name</div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={motherName}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Father's Qualification
                            </div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={fatherQualification}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Father's Occupation
                            </div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={fatherOccupation}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Mother's Qualification
                            </div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={motherQualification}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Mother's Occupation
                            </div>

                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={motherOccupation}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Address</div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                // placeholder="None"
                                value={address}
                                // sx={{ width: "50vw" }}
                                multiline
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                minRows={3}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Phone Number</div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={phoneNumber}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Native Language
                            </div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={language}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Religion</div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={religion}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Category</div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={category}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Nationality</div>

                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={nationality}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Class in which admission is sought
                            </div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={admissionClass}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Physical Inabilities (if any)
                            </div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={inabilities}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div
                        className={styles["label"]}
                        style={{
                            marginTop: "2rem",
                            textAlign: "center",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        For office use only
                    </div>

                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Admission Date
                            </div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={admissionDate}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Receipt No.</div>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                value={receiptNumber}
                            />
                        </div>
                    </div>
                    <br />
                    <div className={styles["form__group--btn"]}>
                        <Button
                            variant="contained"
                            sx={{ fontSize: "1.2rem", marginRight: "1rem" }}
                            size="large"
                            color="warning"
                            onClick={handleFormSubmit}
                        >
                            Submit Form
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ fontSize: "1.25rem" }}
                            size="large"
                            onClick={editFormHandler}
                        >
                            Edit Form
                        </Button>
                    </div>
                </form>
            </main>
        </>
    );
};

export default AdmissionForm;
