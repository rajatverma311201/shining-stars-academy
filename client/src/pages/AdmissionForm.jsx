import React, { useRef, useState } from "react";
import styles from "./AdmissionForm.module.css";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TextField,
} from "@mui/material";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
const AdmissionForm = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const webcamRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [fatherQualification, setFatherQualification] = useState("");
    const [fatherOccupation, setFatherOccupation] = useState("");
    const [motherQualification, setMotherQualification] = useState("");
    const [motherOccupation, setMotherOccupation] = useState("");
    const [address, setAddress] = useState("");
    const [language, setLanguage] = useState("Hindi");
    const [religion, setReligion] = useState("Hindu");
    const [category, setCategory] = useState("General");
    const [nationality, setNationality] = useState("Indian");
    const [admissionClass, setAdmissionClass] = useState("");
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [srNumber, setSrNumber] = useState("");
    const [inabilities, setInabilities] = useState("");
    const [admissionDate, setAdmissionDate] = useState("");
    const [receiptNumber, setReceiptNumber] = useState("");

    const handleImageCapture = () => {
        const cam = webcamRef.current.getScreenshot({
            width: 200,
            height: 200,
        });
        setImageSrc(cam);
        console.log(cam);
        handleClose();
    };

    const handleFormSubmit = () => {
        navigate("/admission-form/preview", {
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
            },
        });
    };

    return (
        <>
            <main className={styles["main-container"]}>
                <h1 className={styles["main-heading"]}>Admission Form</h1>
                <form className={styles["form"]}>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Aadhaar Number
                            </div>
                            <TextField
                                value={aadhaarNumber}
                                fullWidth
                                id="outlined-basic"
                                label="Enter Aadhaar Number"
                                variant="outlined"
                                onChange={(e) => {
                                    setAadhaarNumber(e.target.value);
                                }}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Scholar Reg. No.
                            </div>
                            <TextField
                                value={srNumber}
                                fullWidth
                                id="outlined-basic"
                                label="Enter Scholar Reg. No."
                                variant="outlined"
                                onChange={(e) => {
                                    setSrNumber(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Name</div>

                            <TextField
                                // fullWidth
                                value={name}
                                sx={{ width: "50vw" }}
                                id="outlined-basic"
                                label="Enter Name"
                                variant="outlined"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div
                            className={styles["form__group"]}
                            // style={{ alignSelf: "start" }}
                        >
                            <div className={styles["label"]}>
                                Click to take photo
                            </div>
                            {imageSrc && (
                                <img
                                    src={imageSrc}
                                    width="125px"
                                    height="auto"
                                    alt="img"
                                />
                            )}
                            <div>
                                <Button
                                    variant="contained"
                                    sx={{ fontSize: "1rem" }}
                                    size="medium"
                                    onClick={handleOpen}
                                >
                                    Take Image
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Gender</div>
                            <GenderSelector
                                gender={gender}
                                setGender={setGender}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Date of Birth</div>
                            <DOBSelector dob={dob} setDob={setDob} />
                        </div>
                    </div>

                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Father/Guardian's Name
                            </div>

                            <TextField
                                value={fatherName}
                                fullWidth
                                id="outlined-basic"
                                label="Enter Father/Guardian's Name"
                                variant="outlined"
                                onChange={(e) => {
                                    setFatherName(e.target.value);
                                }}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Mother's Name</div>
                            <TextField
                                value={motherName}
                                fullWidth
                                id="outlined-basic"
                                label="Enter Mother's Name"
                                variant="outlined"
                                onChange={(e) => {
                                    setMotherName(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Father's Qualification
                            </div>
                            <TextField
                                value={fatherQualification}
                                fullWidth
                                id="outlined-basic"
                                label="Enter Father's Qualification"
                                variant="outlined"
                                onChange={(e) => {
                                    setFatherQualification(e.target.value);
                                }}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Father's Occupation
                            </div>
                            <TextField
                                value={fatherOccupation}
                                fullWidth
                                id="outlined-basic"
                                label="Enter Father's Occupation"
                                variant="outlined"
                                onChange={(e) => {
                                    setFatherOccupation(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Mother's Qualification
                            </div>
                            <TextField
                                value={motherQualification}
                                fullWidth
                                id="outlined-basic"
                                label="Enter Mother's Qualification"
                                variant="outlined"
                                onChange={(e) => {
                                    setMotherQualification(e.target.value);
                                }}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Mother's Occupation
                            </div>

                            <TextField
                                value={motherOccupation}
                                fullWidth
                                id="outlined-basic"
                                label="Enter Mother's Occupation"
                                variant="outlined"
                                onChange={(e) => {
                                    setMotherOccupation(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles["form__group"]}>
                        <div className={styles["label"]}>Address</div>
                        <TextField
                            value={address}
                            sx={{ width: "50vw" }}
                            multiline
                            fullWidth
                            id="outlined-basic"
                            label="Enter Address"
                            variant="outlined"
                            minRows={3}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                        />
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Native Language
                            </div>
                            <LanguageSelector
                                language={language}
                                setLanguage={setLanguage}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Religion</div>
                            <ReligionSelector
                                religion={religion}
                                setReligion={setReligion}
                            />
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Category</div>
                            <CategorySelector
                                category={category}
                                setCategory={setCategory}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Nationality</div>

                            <NationalitySelector
                                nationality={nationality}
                                setNationality={setNationality}
                            />
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Class in which admission is sought
                            </div>
                            <AdmissionClassSelector
                                admissionClass={admissionClass}
                                setAdmissionClass={setAdmissionClass}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Physical Inabilities (if any)
                            </div>
                            <TextField
                                value={inabilities}
                                fullWidth
                                id="outlined-basic"
                                label="Enter Inabilities"
                                variant="outlined"
                                onChange={(e) => {
                                    setInabilities(e.target.value);
                                }}
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
                            <AdmissionDateSelector
                                setAdmissionDate={setAdmissionDate}
                                admissionDate={admissionDate}
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Receipt No.</div>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Enter Receipt Number"
                                variant="outlined"
                                value={receiptNumber}
                                onChange={(e) => {
                                    setReceiptNumber(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <br />
                    <div className={styles["form__group--btn"]}>
                        <Button
                            variant="contained"
                            sx={{ fontSize: "1.25rem" }}
                            size="large"
                            color="warning"
                            onClick={handleFormSubmit}
                        >
                            Preview Form
                        </Button>
                    </div>
                </form>
            </main>
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
                            Capture Image
                        </Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
};

export default AdmissionForm;

const NationalitySelector = ({ setNationality, nationality }) => (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
            Select Nationality
        </InputLabel>
        <Select
            value={nationality}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Select Nationality"
            // onChange={handleChange}
            onChange={(e) => {
                setNationality(e.target.value);
            }}
        >
            <MenuItem value="Indian">Indian</MenuItem>
            <MenuItem value="Pakistani">Pakistani</MenuItem>
            <MenuItem value="Nepali">Nepali</MenuItem>
        </Select>
    </FormControl>
);

const AdmissionDateSelector = ({ setAdmissionDate, admissionDate }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <DatePicker
            value={dayjs(
                `${admissionDate.split("/")[2]}-${
                    admissionDate.split("/")[1]
                }-${admissionDate.split("/")[0]}`
            )}
            format="DD-MM-YYYY"
            onChange={(val) => setAdmissionDate(val.$d.toLocaleDateString())}
        />
    </LocalizationProvider>
);

const AdmissionClassSelector = ({ setAdmissionClass, admissionClass }) => (
    <FormControl fullWidth>
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

const CategorySelector = ({ setCategory, category }) => (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            value={category}
            label="Select Category"
            // onChange={handleChange}
            onChange={(e) => {
                setCategory(e.target.value);
            }}
        >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="OBC">OBC</MenuItem>
            <MenuItem value="SC/ST">SC/ST</MenuItem>
        </Select>
    </FormControl>
);

const ReligionSelector = ({ setReligion, religion }) => (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Religion</InputLabel>
        <Select
            value={religion}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Select Religion"
            // onChange={handleChange}
            onChange={(e) => {
                setReligion(e.target.value);
            }}
        >
            <MenuItem value="Hindu">Hindu</MenuItem>
            <MenuItem value="Muslim">Muslim</MenuItem>
            <MenuItem value="Sikh">Sikh</MenuItem>
            <MenuItem value="Christian">Christian</MenuItem>
            <MenuItem value="Buddhism">Buddhism</MenuItem>
            <MenuItem value="Jain">Jain</MenuItem>
        </Select>
    </FormControl>
);

const LanguageSelector = ({ language, setLanguage }) => (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Language</InputLabel>
        <Select
            value={language}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Select Language"
            // onChange={handleChange}
            onChange={(e) => {
                setLanguage(e.target.value);
            }}
        >
            <MenuItem value="Hindi">Hindi</MenuItem>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Urdu">Urdu</MenuItem>
            <MenuItem value="Punjabi">Punjabi</MenuItem>
        </Select>
    </FormControl>
);

const GenderSelector = ({ gender, setGender }) => (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Select Gender"
            onChange={(e) => setGender(e.target.value)}
            // onChange={handleChange}
        >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
        </Select>
    </FormControl>
);

const DOBSelector = ({ dob, setDob }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <DatePicker
            value={dayjs(
                `${dob.split("/")[2]}-${dob.split("/")[1]}-${dob.split("/")[0]}`
            )}
            format="DD-MM-YYYY"
            onChange={(val) => setDob(val.$d.toLocaleDateString())}
        />
    </LocalizationProvider>
);
