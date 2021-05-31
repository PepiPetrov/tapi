const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema(
    {
        chapterName: {
            type: String,
            required: true,
            unique: true
        },
        book: {
            type: mongoose.Types.ObjectId,
            ref: "Book",
            required: true
        },
        bookName: {
            type: String,
            required: true,
        },
        ChapterData: {
            type: String,
            required: false,
        }
    }
);

const Chapter = mongoose.model("chapters", chapterSchema);

module.exports = Chapter;