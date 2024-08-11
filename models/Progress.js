import mongoose from "mongoose";

const schema = new mongoose.Schema({
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
    },
    completedLectures: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Lecture",
        },
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
},
{
    timestamps: true,
}
);

export const Progress = mongoose.model("Progress", schema);