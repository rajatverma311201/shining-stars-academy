import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./TeacherCardForm.module.css";
const TeacherCardFormView = () => {
    const location = useLocation();

    const { name, address, image, designation, fatherName, mobile } =
        location.state || {};

    console.log(location.state);
    return (
        <>
            {/* <h1>ID CARDs</h1> */}

            <div className={styles["id-cards-grid-container"]}>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((ele, idx) => (
                    <div className={styles["id-card-container"]}>
                        <h2 className={styles["school-name"]}>
                            Shining Stars Academy
                        </h2>
                        <div className={styles["school-info"]}>
                            <h2>
                                <p>Matera Chauraha, Bahraich</p>
                                <p>Contact - 8601610863</p>
                                <p>2023-24</p>
                            </h2>
                        </div>
                        <img
                            src={image[idx]}
                            alt=""
                            className={styles["student-img"]}
                        />
                        <div className={styles["student-info"]}>
                            <div className={styles["name-heading"]}>Name</div>
                            <div className={styles["name"]}>{name[idx]}</div>
                            <div className={styles["class-heading"]}>
                                Desig.
                            </div>
                            <div className={styles["class"]}>
                                {designation[idx]}
                            </div>
                            <div className={styles["father-heading"]}>
                                Father
                            </div>
                            <div className={styles["father"]}>
                                Mr. {fatherName[idx]}
                            </div>
                            <div className={styles["mobile-heading"]}>
                                Mobile
                            </div>
                            <div className={styles["mobile"]}>
                                {mobile[idx]}
                            </div>
                            <div className={styles["address-heading"]}>
                                Address
                            </div>
                            <div className={styles["address"]}>
                                {address[idx]}
                            </div>
                        </div>
                        <div className={styles["principal-sign"]}>
                            <img
                                src="/logo-small.jpg"
                                alt=""
                                className={styles["logo-img"]}
                            />
                            <span>Principal Sign</span>
                            <span>
                                <img
                                    className={styles["principal-sign-img"]}
                                    src="/sign.jpg"
                                />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TeacherCardFormView;
