import {renderUser} from "./render";
import { users } from "./data";

export function getUser(users) {
    users.forEach(user => {
        renderUser(user);
    })
}
