import { div } from "../template/document";
import { onClick } from "../users/event.js";

export const User = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;
