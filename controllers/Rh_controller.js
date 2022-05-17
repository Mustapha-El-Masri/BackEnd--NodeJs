const rhModel = require("../models/Rh_model");
  const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");   
 
module.exports = {
   create: asyncHandler(async (req, res, next) => {
    req.body.image = req.file?.filename; 
    const rh = await rhModel.create(req.body);
    res.status(200).json({
      success: true,
      data: rh,
    });
  }),   


  



};
