import React from "react";

function HeaderIcon() {
  return (
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/puppy.svg" alt="puppy face" /> {/* openmoji.org */}
      <span className="ml-3 text-xl">How Much Should I Feed My Dog?</span>
    </a>
  );
}

export default HeaderIcon;
