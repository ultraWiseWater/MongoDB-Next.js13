import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
