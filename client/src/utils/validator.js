import { isValidUsername } from "6pp";




 const userNameValidator = (username) => {

   if (!isValidUsername(username)) {
    return {
        isValid : false,
         errorMessage : "Username is Invalid",
    }
   }

}

export default userNameValidator;