import { Document } from 'mongodb';
import { Schema, models, model } from 'mongoose'

export interface IUser extends Document {
    clerkId?: string;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    planId?: number;
    creditBalance?: number;
}

const UserSchema = new Schema({
    clerkId: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    planId: {
        type: Number
    },
    creditBalance: {
        type: Number
    }
})

const User = models?.User || model('User', UserSchema)

export default User;