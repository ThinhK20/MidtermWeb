import {useState} from "react"
import { UserUpload } from "../../../models/user";
import { updateUserApi } from "../../../apis/user-apis";
import { toast } from "react-toastify";

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";        
        
interface AccountInfoProps {
    emailUser?: string
}

function AccountModal({emailUser}: AccountInfoProps) {
    const [AccountInfo, setAccountInfo] = useState<UserUpload>({
        email: "",
    });
    
return (
    <div className="w-[100%] h-auto padding-container pt-5 shadow-md bg-white hover:shadow-xl rounded-3xl">

      {/* Account Info */}
      <div className="my-10">
          <div className="regular-24"> Account Information </div>

          <div className="flex justify-between items-center py-2 mt-5 w-full regular-16 bg-transparent border-0 border-b-2 border-gray-300">
          <div className="w-2/3 flex justify-between items-center">
              Email
              <input
              type="text"
              className="w-2/3 border-none outline-none placeholder-black placeholder:focus:text-gray-400"
              placeholder={emailUser}
              onChange={(e) => {
                setAccountInfo({...AccountInfo, email:e.target.value,});
              }}></input>
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5"
                  onClick={() => 
                    updateUserApi(AccountInfo).then(() => {
                      toast.success(
                        "Upload Email successfully!"
                    );}).catch(() => {
                      toast.error("Email Upload Failed!");
                    })
                  }
          >
              Save
          </button>
          </div>

          <div className=" items-center py-2 mt-5 w-full regular-16 bg-transparent border-0 border-b-2 border-gray-300">
          <form>
              <div className="w-1/3">
              <label className="" about="password">
                  Current Password
              </label>
              <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 mt-2 bg-white border-1 ring-1 ring-black/50 border-gray-200 rounded-md shadow-md hover:ring-black"
                  placeholder="Enter current password"
                  required
              />
              </div>
              <div className="flex w-full gap-4 mt-10">
              <div className="w-1/3">
                  <label className="" about="password">
                  New Password
                  </label>
                  <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 mt-2 bg-white border-1 ring-1 ring-black/50 border-gray-200 rounded-md shadow-md hover:ring-black"
                  placeholder="Enter new password"
                  required
                  />
              </div>
              <div className="w-1/3">
                  <label className="" about="password">
                  Confirm Password
                  </label>
                  <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 mt-2 bg-white border-1 ring-1 ring-black/50 border-gray-200 rounded-md shadow-md hover:ring-black"
                  placeholder="Enter confirm password"
                  required
                  />
              </div>
              </div>

              <div className="flex w-[100%] justify-end items-center">
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-slate-50 regular-16 rounded-lg text-sm w-full sm:w-auto px-5 py-5 text-center"
                >
                    Change password
                </button>
              </div>
          </form>
          </div>
      </div>

      {/* Social Link */}
      <div className="my-10">
        <div className="regular-24">Social Link</div>

        <div className="flex justify-between items-center py-6 w-full regular-16 bg-transparent border-0 border-b-2 border-gray-300">
          <div className="flex w-1/2 items-center justify-between">
            <div className="flex items-center">
              <svg className="w-12 h-12 mx-2" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
              <span className="px-2">Google</span>
            </div>

            <div className="w-1/3 text-black">Connected</div>
          </div>

          <div className="flex pr-2 gap-4 items-center flex-nowrap">
            <div className="invisible">
              <FontAwesomeIcon icon={faDatabase} />
              <span className="px-2">+10</span>
            </div>
            <span className="px-2 text-blue-400 cursor-pointer">
              Disconnect
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center py-6 w-full regular-16 bg-transparent border-0 border-b-2 border-gray-300">
          <div className="flex w-1/2 items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-12 h-12 mx-2 text-blue-800"
              />
              <span className="px-2">Facebook</span>
            </div>

            <div className="w-1/3 text-black">Not Connected</div>
          </div>

          <div className="flex pr-2 gap-4 text-end">
            <div>
              <FontAwesomeIcon icon={faDatabase} />
              <span className="px-2">+10</span>
            </div>
            <span className="px-2 text-blue-400 cursor-pointer">Connect</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-6 w-full regular-16 bg-transparent border-0 border-b-2 border-gray-300">
          <div className="flex w-1/2 items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-12 h-12 mx-2 text-blue-800"
              />
              <span className="px-2">Linkedin</span>
            </div>

            <div className="w-1/3 text-black">Not Connected</div>
          </div>

          <div className="flex pr-2 gap-4">
            <div>
              <FontAwesomeIcon icon={faDatabase} />
              <span className="px-2">+10</span>
            </div>
            <span className="px-2 text-blue-400 cursor-pointer">
              Disconnect
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center py-6 w-full regular-16 bg-transparent border-0 border-b-2 border-gray-300">
          <div className="flex w-1/2 items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-12 h-12 mx-2 text-black"
              />
              <span className="px-2">Linkedin</span>
            </div>

            <div className="w-1/3 text-black">Not Connected</div>
          </div>

          <div className="flex pr-2 gap-4">
            <div>
              <FontAwesomeIcon icon={faDatabase} />
              <span className="px-2">+10</span>
            </div>
            <span className="px-2 text-blue-400 cursor-pointer">
              Disconnect
            </span>
          </div>
        </div>
      </div>

      {/* Button delete */}
      <div className="flex w-[100%] justify-end items-center my-20">
        <button
            type="submit"
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-slate-50 regular-16 rounded-lg text-sm w-full sm:w-auto px-5 py-5 text-center"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default AccountModal;
