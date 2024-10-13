import { AddUserInput, User } from "@xtypes/resolver-types";

const users: User[] = [
  { id: "1", name: "John Doe", email: "john.doe@example.com", role: "admin" },
  { id: "2", name: "Jane Doe", email: "jane.doe@example.com", role: "user" },
];

export default function addUser(
  _parent,
  { input }: { input: AddUserInput },
): User {
  const id = String(users.length + 1);
  const user = { id, ...input };
  users.push(user);
  return user;
}
