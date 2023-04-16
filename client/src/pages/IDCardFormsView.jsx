import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./IDCardForms.module.css";
const IDCardFormsView = () => {
    const location = useLocation();

    const { name, address, image, _class, fatherName, mobile } = location.state;

    return (
        <>
            <h1>ID CARDs</h1>
            <div className={styles["id-cards-grid-container"]}>
                {[0, 1, 2, 3, 4, 5].map((ele, idx) => (
                    <div className={styles["id-card-container"]}></div>
                ))}
            </div>
        </>
    );
};

export default IDCardFormsView;
