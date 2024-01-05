const router = require("express").Router();
const {
  addPost,
  getAllPosts,
  getSinglePostDetails,
  getPostsByCategory,
  updatePosts,
  deletePost,
} = require("../models/posts.model");
const responseAndErrorHandler = require("../utils/responseAndErrorHandler.js");
const fireBaseApp = require("../utils/fireBaseConfig.js");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
  listAll,
} = require("firebase/storage");

const multer = require("multer");
const storage = getStorage(fireBaseApp);

// Multer Configuration
const storageMulter = multer.memoryStorage();
const upload = multer({ storage: storageMulter });

router.get("/", async (req, res) => {
  const result = await getAllPosts();
  responseAndErrorHandler(result, res);
});

router.get("/:postId", async (req, res) => {
  const result = await getSinglePostDetails([
    {
      column: "id",
      value: req.params.postId,
    },
  ]);
  //   console.log("result is : " , result);
  responseAndErrorHandler(result, res);
});

router.get("/getByCategory/:categoryVal", async (req, res) => {
  const result = await getPostsByCategory([
    {
      column: "category",
      value: req.params.categoryVal,
    },
  ]);
  console.log(result);
  responseAndErrorHandler(result, res);
});

router.post("/add", upload.array("image", 2), async (req, res) => {
  try {
    const downloadURLs = await Promise.all(
      req.files.map(async (file) => {
        const { downloadURL, contentType } = await uploadToFirebase(file);
        res.setHeader("Content-Type", contentType);
        res.setHeader("Content-Disposition", "inline; filename=image.jpg");
        return downloadURL;
      })
    );
    const data = req.body;
    const result = await addPost(data, downloadURLs);
    console.log(result);
    responseAndErrorHandler(result, res);
  } catch (err) {
    res.status(500).json({ err, error: "Internal Server Error" });
  }
});

router.post("/update", async (req, res) => {
  const { data, id } = req.body;
  const result = await updatePosts(data, id);
  responseAndErrorHandler(result, res);
});

router.post("/delete/:postId", async (req, res) => {
  const result = await deletePost([
    {
      column: "id",
      value: req.params.postId,
    },
  ]);
  responseAndErrorHandler(result, res);
});

const uploadToFirebase = async (file) => {
  // console.log("listeing in file");
  const storageRef = ref(storage, `image/${file.originalname}`);
  await uploadBytes(storageRef, file.buffer);
  const downloadURL = await getDownloadURL(storageRef);

  // Optionally, set headers for inline display
  const metadata = await getMetadata(storageRef);
  const contentType = metadata.contentType;

  return {
    downloadURL,
    contentType,
  };
};

module.exports = router;
