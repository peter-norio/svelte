import { writable } from "svelte/store";

// Storeを作成して外部に公開
export const countStore = writable(0);
