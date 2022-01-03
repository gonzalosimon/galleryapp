import React from "react";

const Settings = () => {
  return (
    <div>
      <div class="rounded-lg shadow-xl bg-white ">
        <header class="font-semibold text-lg pb-5">
          Welcome to Simon's Gallery
        </header>
        <p class="text-gray-500 px-4">
          Lorem ipsum dolor sit amet, consectetur adip!
        </p>
        <div class="items-center justify-center">
          <header class="font-semibold text-sm py-3 px-4">Menu Items</header>
          <a
            href=""
            class="text-gray-500 p-3 flex  hover:bg-green-100 hover:text-green-500"
          >
            Menu Item 1
          </a>
          <a
            href=""
            class="text-gray-500 p-3 flex hover:bg-green-100 hover:text-green-500"
          >
            Menu Item 2
          </a>
          <a
            href=""
            class="text-gray-500 p-3 flex hover:bg-green-100 hover:text-green-500"
          >
            Menu Item 3
          </a>
          <a
            href=""
            class="text-gray-500 p-3 flex hover:bg-green-100 hover:text-green-500"
          >
            Menu Item 4
          </a>
        </div>
      </div>
      <div class="rounded-lg shadow-xl bg-white">
        <div class="p-5">
          <footer class="text-center space-x-5">
            <button class="py-2 px-4 mt-5 border border-green-500 rounded-lg text-green-500 font-semibold hover:text-white hover:bg-green-600">
              CANCEL
            </button>
            <button class="py-2 px-4 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600">
              APPLY
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Settings;
