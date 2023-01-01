import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_USERS } from "./MebersPage.query";
import MembersUi from "./MembersPage.presenter";

export default function Members() {
    const [isNo, setIsNo] = useState(false)
    const { data } = useQuery(FETCH_USERS);

    console.log(data)

    
    return(
        <MembersUi
        isNo={isNo}
        data={data}
        />
    )
}