const {
  insert,
  getAll,
  getDataBasedOnCondition,
} = require("../utils/dbFunctions");
let tableName = "reviews";

const addReview = async (data) => {
  const result = await insert(tableName, data);
  return result;
};

const getAllReview = async () => {
  const result = await getAll(tableName);
  return result;
};
const getOneReview = async (data) => {
  const result = getDataBasedOnCondition(tableName, data);
  return result;
};

module.exports = {
  addReview,
  getAllReview,
  getOneReview,
};
