import { gql, useQuery } from "@apollo/client";
import LoginPage from "../../src/components/units/LoginPage/LoginPage.container";

// export const FETCH_USERS = gql`
//   query {
//     fetchUsers {
//       id
//       email
//       nickName
//       password
//       region
//       like
//       age
//     }
//   }
// `;
export default function Login() {
  // const { data } = useQuery(FETCH_USERS);
  // console.log(data);
  return <LoginPage />;
}
