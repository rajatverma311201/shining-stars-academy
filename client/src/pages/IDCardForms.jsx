import { Box, Button, Modal } from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import styles from "./IDCardForms.module.css";

const IDCardForms = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const webcamRef = useRef(null);
    const emptyArray = ["", "", "", "", "", "", "", ""];
    const [name, setName] = useState([...emptyArray]);
    const [fatherName, setFatherName] = useState([...emptyArray]);
    const [_class, setClass] = useState([...emptyArray]);
    const [mobile, setMobile] = useState([...emptyArray]);
    const [address, setAddress] = useState([...emptyArray]);
    const [image, setImage] = useState([...emptyArray]);
    const [idx, setIdx] = useState(0);
    const handleImageCapture = () => {
        console.log(idx);
        const cam = webcamRef.current.getScreenshot({
            width: 400,
            height: 400,
        });
        const currImages = [...image];
        currImages[idx] = cam;
        setImage([...currImages]);
        console.log(cam);
        handleClose();
    };

    const formSubmitHandler = () => {
        navigate("/id-card-form/view", {
            state: {
                name,
                address,
                image,
                _class,
                fatherName,
                mobile,
            },
        });
    };
    return (
        <>
            <h1>IDCardForms</h1>
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
                            <label htmlFor="">Class</label>

                            <select
                                name=""
                                id=""
                                value={_class[idx]}
                                onChange={(e) => {
                                    const currNames = [..._class];
                                    currNames[idx] = e.target.value;
                                    setClass([...currNames]);
                                }}
                            >
                                <option value="">Select Class</option>
                                <option value="NUR">NUR</option>
                                <option value="LKG">LKG</option>
                                <option value="UKG">UKG</option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                                <option value="VI">VI</option>
                                <option value="VII">VII</option>
                                <option value="VIII">VIII</option>
                                <option value="IX">IX</option>
                                <option value="X">X</option>
                            </select>
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

                            <br />

                            {/* <Button
                                variant="contained"
                                sx={{ fontSize: "1rem" }}
                                size="small"
                                onClick={() => {
                                    setIdx(idx);
                                    handleOpen();
                                }}
                            >
                                Take Image
                            </Button> */}

                            <input
                                type="file"
                                accept="image/*"
                                onClick={() => {
                                    setIdx(idx);
                                }}
                                onChange={(e) => {
                                    const currImages = [...image];

                                    currImages[idx] = URL.createObjectURL(
                                        e.target.files[0]
                                    );

                                    console.log(e.target.files[0]);
                                    setImage([...currImages]);
                                }}
                            />

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
                            width={750}
                            height={600}
                            screenshotFormat="image/png"
                            ref={webcamRef}
                            screenshotQuality={1}
                            imageSmoothing={false}
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

export default IDCardForms;
