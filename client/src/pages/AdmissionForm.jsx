import React from "react";
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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AdmissionForm = () => {
    return (
        <>
            <main className={styles["main-container"]}>
                <h1 className={styles["main-heading"]}>Admission Form</h1>
                <form className={styles["form"]}>
                    <div className={styles["form__group"]}>
                        <div className={styles["label"]}>Name</div>

                        <TextField
                            // fullWidth
                            sx={{ width: "50vw" }}
                            id="outlined-basic"
                            label="Enter Name"
                            variant="outlined"
                        />
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Gender</div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select Gender
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Select Gender"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Date of Birth</div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    format="DD-MM-YYYY"
                                    onChange={(val) => console.log(val)}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>

                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Father/Guardian's Name
                            </div>

                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Enter Father/Guardian's Name"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Mother's Name</div>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Enter Mother's Name"
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
                                fullWidth
                                id="outlined-basic"
                                label="Enter Father's Qualification"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Father's Occupation
                            </div>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Enter Father's Occupation"
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
                                fullWidth
                                id="outlined-basic"
                                label="Enter Mother's Qualification"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Mother's Occupation
                            </div>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Enter Mother's Occupation"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div className={styles["form__group"]}>
                        <div className={styles["label"]}>Address</div>
                        <TextField
                            sx={{ width: "50vw" }}
                            multiline
                            fullWidth
                            id="outlined-basic"
                            label="Enter Address"
                            variant="outlined"
                            minRows={3}
                        />
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Native Language
                            </div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select Language
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Select Language"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value="Hindi">Hindi</MenuItem>
                                    <MenuItem value="English">English</MenuItem>
                                    <MenuItem value="Urdu">Urdu</MenuItem>
                                    <MenuItem value="Punjabi">Punjabi</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Religion</div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select Religion
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Select Religion"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value="Hindu">Hindu</MenuItem>
                                    <MenuItem value="Muslim">Muslim</MenuItem>
                                    <MenuItem value="Sikh">Sikh</MenuItem>
                                    <MenuItem value="Christian">
                                        Christian
                                    </MenuItem>
                                    <MenuItem value="Buddhism">
                                        Buddhism
                                    </MenuItem>
                                    <MenuItem value="Jain">Jain</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Category</div>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Enter Category"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Nationality</div>

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select Nationality
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Select Nationality"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value="Indian">Indian</MenuItem>
                                    <MenuItem value="Pakistani">
                                        Pakistani
                                    </MenuItem>
                                    <MenuItem value="Nepali">Nepali</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Class in which admission is sought
                            </div>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Enter Class"
                                variant="outlined"
                            />
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Physical Inabilities (if any)
                            </div>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Enter Inabilities"
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
                            <div className={styles["label"]}>Admitted In</div>
                            {/* <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Enter Admitted In"
                                variant="outlined"
                            /> */}
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select Class
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Select Class"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value="NUR">Nursery</MenuItem>
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
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Fees Paid on </div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    format="DD-MM-YYYY"
                                    onChange={(val) => console.log(val)}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className={styles["form__group--inner"]}>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>
                                Form Issued on
                            </div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    format="DD-MM-YYYY"
                                    onChange={(val) => console.log(val)}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className={styles["form__group"]}>
                            <div className={styles["label"]}>Receipt No.</div>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Enter Receipt Number"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <br />
                    <div className={styles["form__group"]}>
                        <Button
                            variant="contained"
                            sx={{ fontSize: "1.25rem" }}
                            size="large"
                        >
                            Preview Form
                        </Button>
                    </div>
                </form>
            </main>
            <Modal>
                <Box></Box>
            </Modal>
        </>
    );
};

export default AdmissionForm;
