import type { Database } from "./database.types";

export type Cabin = Database["public"]["Tables"]["cabins"]["Row"];

export type CabinCapacity = "small" | "medium" | "large" | "all";
