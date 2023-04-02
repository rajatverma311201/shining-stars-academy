import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import styles from "./AdmissionFormView.module.css";
const AdmissionFormView = () => {
    const URL = import.meta.env.VITE_API_URL;
    const [searchParams] = useSearchParams();
    const location = useLocation();
    // console.log(location.state);
    const [form, setForm] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (location.state) {
            setForm(location.state);
            setIsLoading(false);
            return;
        }
        (async () => {
            try {
                const resp = await axios.get(
                    `${URL}/admission-forms/${searchParams.get("id")}`
                );
                setForm(resp.data.data.form);

                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);
    if (isLoading) {
        return <h1>Loading... Please Wait</h1>;
    }
    return (
        <div className={styles["form-container"]}>
            <div className={styles["header"]}>
                <div className={styles["img"]}>
                    <a href="/">
                        <img src="/logo-small.jpg" />
                    </a>
                </div>
                <div className={styles["text"]}>
                    <p>Application form for Admission</p>
                    <h1>SHINING STARS ACADEMY</h1>
                    <p>Aswa Road, Shining Chauraha</p>
                    <p>Bahraich</p>
                </div>
            </div>
            <hr />
            <div className={styles["top-info-container"]}>
                <div className={styles["info-top"]}>
                    <div className={styles["info-top-name"]}>
                        Sr. No. &nbsp; -{" "}
                    </div>
                    <div className={styles["info-top-text"]}>
                        {form.srNumber}
                    </div>
                </div>
                <div className={styles["info-top"]}>
                    <div className={styles["info-top-name"]}>
                        Aadhaar No. &nbsp; -
                    </div>
                    <div className={styles["info-top-text"]}>
                        {form.aadhaarNumber}
                    </div>
                </div>
            </div>

            <div className={styles["info-outer-container"]}>
                <div className={styles["student-image-container"]}>
                    <img
                        src={form.imageSrc}
                        alt=""
                        className={styles["student-image"]}
                    />
                </div>
                {DATA.map((ele, idx) => (
                    <div key={idx} className={styles["info-container"]}>
                        <div className={styles["info-heading"]}>
                            {ele.label}
                        </div>
                        <div className={styles["info-text"]}>
                            {form[ele.property]}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles["declaration"]}>
                <div className={styles["declaration-heading"]}>
                    Declaration of Parent/Guardian
                </div>
                <p className={styles["declaration-text"]}>
                    I declare that the above particulars furnished are correct
                    and true. I understand that it is the fundamental policy of
                    the school to treat all students alike. Therefore, I shall
                    neither ask nor expect any special privilege for my child.
                    <br />I agree to abide by the rules and here promise the
                    payment of the fees at a due time every month.
                </p>
            </div>
            <div className={styles["sign-container"]}>
                <div className={styles["sign"]}>
                    Signature of Parents/Guardian
                </div>
            </div>
        </div>
    );
};

const DATA = [
    {
        label: "Name",
        property: "name",
    },
    {
        label: "Gender",
        property: "gender",
    },
    {
        label: "Date of Birth",
        property: "dob",
    },
    {
        label: "Father/Guardian's Name",
        property: "fatherName",
    },
    {
        label: "Mother's Name",
        property: "motherName",
    },
    {
        label: "Father's Occupation",
        property: "fatherOccupation",
    },
    {
        label: "Father's Qualification",
        property: "fatherQualification",
    },
    {
        label: "Mother's Occupation",
        property: "motherOccupation",
    },
    {
        label: "Mother's Qualification",
        property: "motherQualification",
    },
    {
        label: "Address",
        property: "address",
    },
    {
        label: "Native Language",
        property: "language",
    },
    {
        label: "Religion",
        property: "religion",
    },
    {
        label: "Category",
        property: "category",
    },
    {
        label: "Nationality",
        property: "nationality",
    },
    {
        label: "Class in which admission is sought",
        property: "admissionClass",
    },

    {
        label: "Physical Inabilities (if any)",
        property: "inabilities",
    },
    // {
    //     property: "admissionDate",
    // },
    // {
    //     property: "receiptNumber",
    // },
];

export default AdmissionFormView;
