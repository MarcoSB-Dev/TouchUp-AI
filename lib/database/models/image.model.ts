import { Document } from "mongodb";
import { Schema, model, models } from "mongoose";

export interface IImage extends Document {
    title: string;
    publicId: string;
    transformationType: string;
    transformationUrl: URL;
    secureURL: string;
    width?: number;
    height?: number;
    config?: object;
    aspectRatio?: string;
    prompt: string;
    author: {
        id: string,
        firstName: string,
        lastName: string
    };
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
    transformationType: {
        type: String,
        required: true
    },
    transformationUrl: {
        type: URL,
        required: true
    },
    secureURL: {
        type: String,
        required: true
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    },
    config: {
        type: Object
    },
    aspectRatio: {
        type: String
    },
    prompt: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        defualt: Date.now
    },
    updatedAt: {
        type: Date,
        defualt: Date.now
    }
})

const Image = models?.Image || model('Image', ImageSchema)

export default Image;