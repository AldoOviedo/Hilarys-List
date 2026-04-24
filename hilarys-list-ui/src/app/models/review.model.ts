import { Specialty } from "./specialty.enum";
import { Cafe } from "./cafe.model";

export interface Review {
  id: number;
  rating?: number;
  notes?: string;
  specialty?: Specialty;
  servesAlcohol: boolean;
  addedAt: string;
  cafe: Cafe;
}
