import axios from "axios";
import { UserUpload } from "../models/user";

export const updateUserApi = (user: UserUpload) => {
   console.log("User: ", user);
   return axios.putForm(
      "https://localhost:44320/api/user/" +
         "BA524B8E-8B6C-4139-BA21-B561B2EDC792",
      user
   );
};
