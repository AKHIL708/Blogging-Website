const {
  insert,
  getAll,
  getDataBasedOnCondition,
  update,
  DeleteRow,
} = require("../utils/dbFunctions");
const tableName = "posts";

const addPost = async (data, imageUrl) => {
  let id = Date.now();
  const finalData = { ...data, image: imageUrl, id: id };
  const result = await insert(tableName, finalData);
  return result;
};

const addPostReview = async (data) => {
  const result = await insert("reviews", data);
  return result;
};

const getAllPosts = async () => {
  const result = await getAll(tableName);
  return result;
};

const getBestDealPosts = async (data) => {
  const result = await getDataBasedOnCondition(tableName, data);
  return result;
};

const getallPostsReviews = async (data) => {
  const result = await getDataBasedOnCondition("reviews", data);
  return result;
};

const getSinglePostDetails = async (data) => {
  try {
    const result = await getDataBasedOnCondition(tableName, data);
    return result;
  } catch (error) {
    // Handle the error
    const errorResult = {
      message: "Error in getSinglePostDetails",
      err: error.message,
      code: error.code,
      details: {
        tableName,
        condition,
      },
    };
    return errorResult;
  }
};

const getSinglePostReview = async (data) => {
  try {
    const result = await getDataBasedOnCondition(tableName, data);
    return result;
  } catch (error) {
    // Handle the error
    const errorResult = {
      message: "Error in getSinglePostReview",
      err: error.message,
      code: error.code,
      details: {
        tableName,
        condition,
      },
    };
    return errorResult;
  }
};

const getPostsByCategory = async (data) => {
  const result = await getDataBasedOnCondition(tableName, data);
  return result;
};

const updatePosts = async (data, id) => {
  const result = update(tableName, data, id);
  return result;
};

const deletePost = async (data) => {
  try {
    const result = DeleteRow(tableName, data);
    return result;
  } catch (error) {
    // Handle the error
    const errorResult = {
      message: "Error in deletePost",
      err: error.message,
      code: error.code,
      details: {
        tableName,
        condition,
      },
    };
    return errorResult;
  }
};

module.exports = {
  addPost,
  getAllPosts,
  getPostsByCategory,
  getSinglePostDetails,
  deletePost,
  getallPostsReviews,
  addPostReview,
  getBestDealPosts,
  getSinglePostReview,
  updatePosts,
};
