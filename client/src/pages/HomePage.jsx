import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import axios from "axios";
const HomePage = () => {
    const URL = import.meta.env.VITE_API_URL;

    const [forms, setForms] = useState([]);
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
    const navigate = useNavigate();
    return (
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
                    <div className={styles["form-container"]} key={form._id}>
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
                        <Button
                            variant="contained"
                            // sx={{ fontSize: "1.1rem" }}
                            size="medium"
                            color="success"
                            onClick={() =>
                                navigate(`/admission-form/view?id=${form._id}`)
                            }
                        >
                            View Form
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
