const express = require("express");
const router = express.Router();

const {
  newCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/admin/genres/addgenre").post(newCategory);
router.route("/genres").get(getCategory);
router.route("/movies/:genreID").delete(deleteCategory);

module.exports = router;
