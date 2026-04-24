import { User } from "./user.model";

export interface Cafe {
    id: Number;
    name: String;
    city: String;
    state: String;
    isPublic: Boolean;
    addedAt: string;
    user: User;
}
