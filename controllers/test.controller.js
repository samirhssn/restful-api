const Model = require("../models/test.model");

// Post Method
exports.postingData = async (req, res) => {
  // res.send("Post API");

  if (!req.body.id || !req.body.name || !req.body.age) {
    return res.status(400).send({
      message: "data can not be empty",
    });
  }

  const data = new Model({
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Get all Method
exports.getingAllData = async (req, res) => {
  // res.send("Get ALL API");
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get by ID Method
exports.gettingDataById = async (req, res) => {
  //   res.send("Get by ID API");
  // res.send(req.params.id);
  try {
    const data = await Model.findOne({ id: req.body.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update by ID Method
exports.updatingDataById = async (req, res) => {
  // res.send("Update by ID API");
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delete by ID Method
exports.deletingDataById = async (req, res) => {
  // res.send("Delete by ID API");
  try {
    const id = req.body.id;
    const data = await Model.findOneAndRemove(id);
    res.send(`Document with ${data.id} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
