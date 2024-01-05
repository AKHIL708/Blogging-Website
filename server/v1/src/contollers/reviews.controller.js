const router = require("express").Router();
const {
  addReview,
  getAllReview,
  getOneReview,
} = require("../models/reviews.model.js");
// const { encrypt } = require("../utils/jwtFunctionality");

// get all reviews
router.get("/", async (req, res) => {
  const result = await getAllReview();
  if (result.err) {
    console.log(`${result.err}, ${result.message} `);
    return res.status(500).json(result);
  } else {
    return res.status(200).json({
      message: "success",
      result,
    });
  }
});

// get all reviews by postId
router.get("/:postId", async (req, res) => {
  const result = await getOneReview([
    {
      column: "postId",
      value: req.params.postId,
    },
  ]);
  // console.log("id :", req.params.userId, "data: ", result);
  if (!(result == null)) {
    return res.status(200).json({
      message: "success",
      result,
    });
  } else {
    // console.log(`${result.err}, ${result.message} `);
    return res.status(500).json(result);
  }
});

// get one post by its id
router.get("/singlePostReview/:id", async (req, res) => {
  const result = await getOneReview([
    {
      column: "id",
      value: req.params.id,
    },
  ]);
  // console.log("id :", req.params.userId, "data: ", result);
  if (!(result == null)) {
    return res.status(200).json({
      message: "success",
      result,
    });
  } else {
    // console.log(`${result.err}, ${result.message} `);
    return res.status(500).json(result);
  }
});

router.post("/add", async (req, res) => {
  const result = await addReview(
    ({ id, userId, postId, likes, postedOn, comment } = req.body)
  );
  // console.log("result is : ", result);
  if (!result.err) {
    return res.status(200).json({
      message: "success",
      result,
    });
  } else {
    console.log(`${result.err}, ${result.message} `);
    return res.status(500).json(result);
  }
});

module.exports = router;
