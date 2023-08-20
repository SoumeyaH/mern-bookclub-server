const { Schema, model } = require("mongoose");

const schema = {
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
      admins: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      ],
      members: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      ],
      pendingMembership: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      requestingMembership: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      currentlyReading: [{
        type: String,
      }],
      previouslyRead: [{
        type: String,
      }],
};

const bookClubSchema = new Schema(schema, {
  timestamps: true,
});

const BookClub = new model("BookBClub", bookClubSchema);

module.exports = BookClub;