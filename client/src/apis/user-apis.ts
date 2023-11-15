/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { UserUpload } from "../models/user";

export const updateUserApi = (user: UserUpload) => {
   const userStorage = JSON.parse(
      localStorage.getItem("user") as string
   ) as any;
   return axios.putForm(
      "https://localhost:44320/api/user/" + userStorage.userId,
      user
   );
};

export const fetchUserApi = (formData: FormData) => {
   const url = "https://localhost:44320/api/user/login";
   return fetch(url, {
      method: "POST",
      body: formData,
   })
      .then((res) => res.json())
      .then((res) => {
         localStorage.setItem("isLogin", "true");
         localStorage.setItem("user", JSON.stringify(res));
         const data = JSON.parse(localStorage.getItem("user") || "{}");
         localStorage.setItem("userId", data.userId ? data.userId : "");
         localStorage.setItem("username", data.username ? data.username : "");
         localStorage.setItem("password", data.password ? data.password : "");
         localStorage.setItem("location", data.location ? data.location : "");
         localStorage.setItem("age", data.age ? data.age : "");
         localStorage.setItem("gender", data.gender);
         localStorage.setItem("email", data.email ? data.email : "");
         localStorage.setItem("fullName", data.fulllName ? data.fulllName : "");
         localStorage.setItem("facebook", data.facebook ? data.facebook : "");
         localStorage.setItem("phone", data.phone ? data.phone : "");
         localStorage.setItem("avatar", data.avatar ? data.avatar : "");
         localStorage.setItem(
            "coverImage",
            data.coverImage ? data.coverImage : ""
         );
         localStorage.setItem("about", data.about ? data.about : "");
         localStorage.setItem(
            "accessToken",
            data.accessToken ? data.accessToken : ""
         );
         localStorage.setItem(
            "refreshToken",
            data.refreshToken ? data.refreshToken : ""
         );
      })
      .catch((err) => {
         console.log(err);
         localStorage.setItem("isLogin", "false");
      });
};

export const fetchUserApiByStorage = () => {
   const userId = (JSON.parse(localStorage.getItem("user") as string) as any)
      .userId;
   console.log("User id: ", userId);
   const url = "https://localhost:44320/api/user/" + userId;
   return fetch(url, {
      method: "GET",
   })
      .then((res) => res.json())
      .then((res) => {
         localStorage.setItem("isLogin", "true");
         localStorage.setItem("user", JSON.stringify(res));
         const data = JSON.parse(localStorage.getItem("user") || "{}");
         localStorage.setItem("userId", data.userId ? data.userId : "");
         localStorage.setItem("username", data.username ? data.username : "");
         localStorage.setItem("password", data.password ? data.password : "");
         localStorage.setItem("location", data.location ? data.location : "");
         localStorage.setItem("age", data.age ? data.age : "");
         localStorage.setItem("gender", data.gender);
         localStorage.setItem("email", data.email ? data.email : "");
         localStorage.setItem("fullName", data.fulllName ? data.fulllName : "");
         localStorage.setItem("facebook", data.facebook ? data.facebook : "");
         localStorage.setItem("phone", data.phone ? data.phone : "");
         localStorage.setItem("avatar", data.avatar ? data.avatar : "");
         localStorage.setItem(
            "coverImage",
            data.coverImage ? data.coverImage : ""
         );
         localStorage.setItem("about", data.about ? data.about : "");
         localStorage.setItem(
            "accessToken",
            data.accessToken ? data.accessToken : ""
         );
         localStorage.setItem(
            "refreshToken",
            data.refreshToken ? data.refreshToken : ""
         );
      })
      .catch((err) => {
         console.log(err);
         localStorage.setItem("isLogin", "false");
      });
};
