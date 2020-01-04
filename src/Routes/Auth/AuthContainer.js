import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
    const [action, setAction] = useState("logIn");
    const name = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const [requestSecret] = useMutation(LOG_IN, {
        update: (_, {data}) => {
            const { requestSecret} = data;
            if(!requestSecret){
                toast.error("You dont have an account yet, create one");
                setTimeout(() => setAction("signUp"), 2000);
            }
        },
        variables: { email: email.value }
      });

    const createAccount = useMutation(CREATE_ACCOUNT, {
        variables: {
            email:email.value,
            name: name.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    })
    
    const onSubmit = e => {
        e.preventDefault();
        if(action === "logIn") {
            if(email !== ""){
                requestSecret();
            }else{
                toast.error("Email is required");
            }
        }else if(action === "SingUp"){
            if(email.value !== "" &&
               name.value !== "" &&
               firstName.value !== "" &&
               lastName.value !== ""
            ){
                    createAccount();
            }else {
                toast.error("All field required");
            }
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
            onSubmit={onSubmit}
        />
    );
}