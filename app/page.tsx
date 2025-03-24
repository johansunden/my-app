/** Add your relevant code here for the issue to reproduce */

import { PasswordSignInRequest } from "./classes";

export default function Home() {

  const request = new PasswordSignInRequest({ username: "jon", password: "123" });

  return <div>
    <div>Username: {request.username}</div>
    <div>Password: {request.password}</div>
  </div>
}
