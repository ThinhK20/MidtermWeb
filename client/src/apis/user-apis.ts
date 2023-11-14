import axios from "axios";
import { UserUpload } from "../models/user";

export const updateUserApi = (user: UserUpload) => {
   console.log("User: ", user);
   return axios.putForm(
      "https://localhost:44320/api/user/" +
         "B59751FE-D815-4D5F-BCFB-9B6DD3D1DFB9",
      user
   );
};
