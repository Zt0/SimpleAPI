import mongoose, { Schema } from 'mongoose';

export interface IUser extends mongoose.Document {
    firstname: string;              // storaket te ket storaket
    lastname: string;                       // mecatar te poqratar
    age: number;
}

const UserSchema = new Schema(
    {
        firstname: { type: String },      // poqratar string chi linum
        lastname: { type: String },
        age: { type: Number },
    },
    { versionKey: false }
);

export default mongoose.model<IUser>('User', UserSchema);
