import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQueries";

export default () => {
    const [action, setAction] = useState("logIn");
    const name = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const [requestSecretMutation] = useMutation(LOG_IN, {
        variables: { email: email.value }
      });
    
    const onLogin = e => {
        e.preventDefault();
        if (email !== "") {
            requestSecretMutation();
        }
    }

    return (
        <AuthPresenter
            setAction={setAction}
            action={action}
            name={name}
            firstName={firstName}
            lastName={lastName}
            email={email}
            onLogin={onLogin}
        />
    );
}