import { gql, useQuery } from "@apollo/client";

export const FETCH_USERS = gql`
  query {
    fetchUsers {
      id
      email
      nickName
      password
      region
      like
      age
    }
  }
`;
export default function LoginPage() {
  const { data } = useQuery(FETCH_USERS);
  console.log(data);
  return (
    <>
      <div>data</div>
    </>
  );
}
