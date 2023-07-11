import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBullseye,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="h-550px bg-LightBlue">
      <div className="h-1/4 flex justify-around">
        <div className="mt-7 ">
          <img
            src="https://schoolhues.com/wp-content/uploads/2022/10/b.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="w-1/4 flex  justify-center items-center">
          <div className="text-lg mr-5">
            <button>Login</button>
          </div>
          <div className="text-lg bg-Light3Blue text-white pt-3 pb-3 pl-5 pr-5 text-center rounded-3xl font-bold">
            Post a Job
          </div>
        </div>
      </div>
      <div className="h-3/4 flex flex-col justify-center  items-center w-full">
        <div className="text-5xl font-bold">
          Over <span className="text-blue-700">1200+</span> jobs are waiting for
          you
        </div>
        <div
          class="w-3/4 
            mt-7"
        >
          <div class="search-bar rounded-full w-fu">
            <div class="search-category">
              <a href="#">
                <span>Job Titles</span>
                <FontAwesomeIcon
                  icon={faSearch}
                  color="black"
                  className="ml-2"
                />
              </a>
              <div class="category-menu">
                <a href="#" class="menu-item">
                  Communication
                </a>
                <a href="#" class="menu-item">
                  Creativity
                </a>
                <a href="#" class="menu-item">
                  Empathy
                </a>
                <a href="#" class="menu-item">
                  Leadership
                </a>
                <a href="#" class="menu-item">
                  Patience
                </a>
              </div>
            </div>
            <div class="search-category">
              <a href="#">
                <span>All locations</span>
                <FontAwesomeIcon
                  icon={faBullseye}
                  color="black"
                  className="ml-2"
                />
              </a>
              <div class="category-menu">
                <a href="#" class="menu-item">
                  Benguluru
                </a>
                <a href="#" class="menu-item">
                  Chennai
                </a>
                <a href="#" class="menu-item">
                  Kolkata
                </a>
                <a href="#" class="menu-item">
                  Hyderabad
                </a>
                <a href="#" class="menu-item">
                  Mumbai
                </a>
              </div>
            </div>
            <div class="search-category">
              <a href="#">
                <span>All Categories</span>
                <FontAwesomeIcon
                  icon={faFolder}
                  color="black"
                  className="ml-2"
                />
              </a>
              <div class="category-menu">
                <a href="#" class="menu-item">
                  High School Teacher
                </a>
                <a href="#" class="menu-item">
                  Primary Teacher
                </a>
                <a href="#" class="menu-item">
                  Principal Teacher
                </a>
                <a href="#" class="menu-item">
                  Secondary Teacher
                </a>
                <a href="#" class="menu-item">
                  Intermediate Teacher
                </a>
              </div>
            </div>

            <a href="#" class="search-btn">
              <div className="text-sm bg-Light3Blue text-white pt-3 pb-3 pl-4 pr-5 rounded-3xl font-bold">
                Search
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
