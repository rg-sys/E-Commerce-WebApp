const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  images: [
    {
      public_id: {
        type: String,
        // required: true,s
      },
      url: {
        type: String,
        // required: true,
      },
    },
  ],
});

module.exports = mongoose.model("category", categorySchema);
