import { User } from "./user.model";

export interface Cafe {
    id: number;
    name: string;
    city: string;
    state: string;
    isPublic: Boolean;
    hasVisted: Boolean;
    addedAt: string;
    user: User;
}
