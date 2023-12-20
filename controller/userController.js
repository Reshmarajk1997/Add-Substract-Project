const infoInstance = require("../models/pageModel");

const loadVal = async (req, res) => {
  try {
    const val = await infoInstance.findOne().exec();
    if (!val) {
      console.log("not found");
      res.status(404).json({ success: false, message: "Value not found" });
    } else {
      console.log("val is", val.numb);
      res.render("userPage", { numbVal: val.numb });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const added = async (req, res) => {
  try {
    const updatedVal = await infoInstance.findOneAndUpdate(
      {},
      { $inc: { numb: 1 } },
      { new: true }
    );
    res.json({ success: true, updatedValue: updatedVal.numb });
  } catch (error) {
    console.log("error", error);
    res.json({ success: false, error: error.message });
  }
};
const substracted = async (req, res) => {
  try {
    const updatedVal = await infoInstance.findOneAndUpdate(
      {},
      { $inc: { numb: -1 } },
      { new: true }
    );
    res.json({ success: true, updatedValue: updatedVal.numb });
  } catch (error) {
    console.log("error", error);
    res.json({ success: false, error: error.message });
  }
};

module.exports = {
  loadVal,
  added,
  substracted
};
