const { Schema, model } = require("mongoose");

const schema = {
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      isPublic: {
        type: String,
        required: true,
      },
      books: [{
        type: String,
      }],
};

const bookListSchema = new Schema(schema, {
  timestamps: true,
});

const BookList = new model("BookList", bookListSchema);

module.exports = BookList;