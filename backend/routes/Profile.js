const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");

const {updateProfile, getAllUserDetails, deleteAccount} = require("../controllers/Profile");

router.put("/updateProfile", auth, updateProfile);
router.get("/getUserDetails", auth, getAllUserDetails);
router.delete("/deleteProfile", auth, deleteAccount);

module.exports = router;