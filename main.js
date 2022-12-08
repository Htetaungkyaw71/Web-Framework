import { render } from "./init/index.js";
import { User } from "./users/User.js";

const firstName = "Marvin";
const lastName = "Frachet";


render("#root",User({firstName,lastName}));