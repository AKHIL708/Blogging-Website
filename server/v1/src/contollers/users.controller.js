const router = require("express").Router();
const {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../models/users.model");
const fireBaseApp = require("../utils/fireBaseConfig.js");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
  listAll,
} = require("firebase/storage");
// const { encrypt } = require("../utils/jwtFunctionality");

const multer = require("multer");
const storage = getStorage(fireBaseApp);

// Multer Configuration
const storageMulter = multer.memoryStorage();
const upload = multer({ storage: storageMulter });

router.get("/", async (req, res) => {
  const result = await getAllUsers();
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

router.get("/:userId", async (req, res) => {
  const result = await getOneUser([
    {
      column: "id",
      value: req.params.userId,
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

router.post("/register", upload.array("profileUrl", 2), async (req, res) => {
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
    const result = await addUser(data, downloadURLs);
    console.log(result);
    if (!result.err) {
      return res.status(200).json({
        message: "success",
        result,
        // token, // this creates a token by taking results data and sends the response
      });
    } else {
      console.log(`${result.err}, ${result.message} `);
      return res.status(500).json(result);
    }
  } catch (err) {
    res.status(500).json({ err, error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const result = await getOneUser(req.body);
  console.log("result is : ", result);
  // console.log("result is : ", result);
  if (result == null) {
    return res.status(500).json({
      message: "fail User not found",
    });
  } else {
    // let token = encrypt(result[0]);
    if (!result.err) {
      return res.status(200).json({
        message: "success",
        result,
        // token, // this creates a token by taking results data and sends the response
      });
    } else {
      console.log(`${result.err}, ${result.message} `);
      return res.status(500).json(result);
    }
  }
});

// update user
router.post("/update", async (req, res) => {
  const { data, id } = req.body;
  const UserExist = await getOneUser([
    {
      column: "id",
      value: id,
    },
  ]);
  const result = await updateUser(data, id);
  if (UserExist) {
    if (!result.err) {
      return res.status(200).json({
        message: "success",
        // result,
        result, // this creates a token by taking results data and sends the response
      });
    } else {
      console.log(`${result.err}, ${result.message} `);
      return res.status(500).json(result);
    }
  } else {
    return res.status(500).json({
      result: result.err,
      message: "failure",
      error: `no user Exist with id : ${id}`,
    });
  }
});

// delete user
router.post("/delete", async (req, res) => {
  const result = await deleteUser(req.body);
  if (!result.err) {
    res.status(200).json({
      message: "success",
      result,
    });
  } else {
    console.log(`${result.err}, ${result.message} `);
    return res.status(500).json(result);
  }
});

const uploadToFirebase = async (file) => {
  // console.log("listeing in file");
  const storageRef = ref(storage, `profileUrl/${file.originalname}`);
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
