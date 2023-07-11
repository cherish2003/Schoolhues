import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faBullseye,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
export const Footer = () => {
  return (
    <footer class=" mt-20">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
              <img
                src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/1.png?resize=768%2C768&ssl=1"
                class="h-52 mr-3"
                alt="FlowBite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                About us
              </h2>
              <ul class="text-gray-700 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    SER Center, Prasadampadu, Vijayawada, India - 521108
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    +91 9685511620
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" class="hover:underline">
                    hello@schoolhues.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul class="text-gray-700  font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline ">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Blogs
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" class="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Services
              </h2>
              <ul class="text-gray-700 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Schools
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" class="hover:underline">
                    Candidates
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-700 sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              SchoolHues
            </a>
            . All Rights Reserved.
          </span>
          
        </div>
      </div>
    </footer>
  );
};
