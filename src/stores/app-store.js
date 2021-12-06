import { writable } from "svelte/store";
export const openApplications = writable({
  spotify: false,
});
export const isActiveApplications = writable();
