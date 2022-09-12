const express = require("express");
const router = express.Router();
const {
  postingData,
  getingAllData,
  gettingDataById,
  updatingDataById,
  deletingDataById,
} = require("../controllers/test.controller");

router.post("/post", postingData);
router.get("/getAll", getingAllData);
router.get("/getOneById/", gettingDataById);
router.patch("/update/:id", updatingDataById);
router.delete("/deleteById/", deletingDataById);

module.exports = router;
