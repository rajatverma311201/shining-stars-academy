import { Box, Button, Modal } from "@mui/material";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import styles from "./TeacherCardForm.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const TeacherCardForm = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const webcamRef = useRef(null);
    const emptyArray = ["", "", "", "", "", "", "", ""];
    const [name, setName] = useState([...emptyArray]);
    const [fatherName, setFatherName] = useState([...emptyArray]);
    const [designation, setDesignation] = useState([...emptyArray]);
    const [mobile, setMobile] = useState([...emptyArray]);
    const [address, setAddress] = useState([...emptyArray]);
    const [image, setImage] = useState([...emptyArray]);
    const [idx, setIdx] = useState(0);
    const handleImageCapture = () => {
        console.log(idx);
        const cam = webcamRef.current.getScreenshot({
            width: 200,
            height: 200,
        });
        const currImages = [...image];
        currImages[idx] = cam;
        setImage([...currImages]);
        console.log(cam);
        handleClose();
    };

    const formSubmitHandler = () => {
        navigate("/teacher-card-form/view", {
            state: {
                name,
                address,
                image,
                designation,
                fatherName,
                mobile,
            },
        });
    };
    return (
        <>
            <h1>TeacherCardForm</h1>
            <div className={styles["main-grid-container"]}>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((ele, idx) => (
                    <div className={styles["card-container"]} key={idx}>
                        <div className={styles["form__group"]}>
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                value={name[idx]}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    const currNames = [...name];
                                    currNames[idx] = e?.target?.value;
                                    setName([...currNames]);
                                }}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <label htmlFor="">Father</label>
                            <input
                                placeholder="Mr."
                                type="text"
                                value={fatherName[idx]}
                                onChange={(e) => {
                                    const currNames = [...fatherName];
                                    currNames[idx] = e.target.value;
                                    setFatherName([...currNames]);
                                }}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <label htmlFor="">Designation</label>

                            <input
                                name=""
                                id=""
                                value={designation[idx]}
                                onChange={(e) => {
                                    const currNames = [...designation];
                                    currNames[idx] = e.target.value;
                                    setDesignation([...currNames]);
                                }}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <label htmlFor="">Address</label>
                            <input
                                type="text"
                                value={address[idx]}
                                onChange={(e) => {
                                    const currNames = [...address];
                                    currNames[idx] = e.target.value;
                                    setAddress([...currNames]);
                                }}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <label htmlFor="">Mobile</label>
                            <input
                                type="text"
                                value={mobile[idx]}
                                onChange={(e) => {
                                    const currNames = [...mobile];
                                    currNames[idx] = e.target.value;
                                    setMobile([...currNames]);
                                }}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <Button
                                variant="contained"
                                sx={{ fontSize: "1rem" }}
                                size="small"
                                onClick={() => {
                                    setIdx(idx);
                                    handleOpen();
                                }}
                            >
                                Take Image
                            </Button>
                            <img
                                src={image[idx]}
                                width={"150px"}
                                height={"150px"}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Button
                variant="contained"
                sx={{ fontSize: "1.25rem", m: 5 }}
                size="medium"
                onClick={formSubmitHandler}
            >
                Create ID Cards
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                sx={{ backdropFilter: "blur(10px)" }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        // width: 00,
                        bgcolor: "background.paper",
                        // border: "2px solid #000",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <div className={styles["webcam-modal"]}>
                        <Webcam
                            width={400}
                            height={400}
                            screenshotFormat="image/jpeg"
                            ref={webcamRef}
                            screenshotQuality={0.5}
                        />
                        <Button
                            variant="contained"
                            sx={{ fontSize: "1.25rem" }}
                            size="medium"
                            onClick={handleImageCapture}
                        >
                            {console.log(idx)}
                            Capture Image
                        </Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
};

export default TeacherCardForm;
