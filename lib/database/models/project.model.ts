import { Schema, model, models } from "mongoose";

export interface IProject extends Document {
    _id: string;
    title: string;
    description: string;
    createdAt: Date;
    imageUrl: string;
    url: string;
    codeUrl?: string;
    email: string;
    category: { _id: string, name: string }
    creator: { _id:string, firstName:string}
}

const ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true},
    url: { type: String, required: true },
    codeUrl: { type: String },
    email: {type: String, required: true} ,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Project = models.Project || model('Project', ProjectSchema)

export default Project;