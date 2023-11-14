import axios from "axios";
import { UserUpload } from "../models/user";

export const updateUserApi = (user: UserUpload) => {
   console.log("User: ", user);
   return axios.putForm(
      "https://localhost:44320/api/user/" +
         "AA655396-B319-40B9-8159-E9806C2953D8",
      user
   );
};
