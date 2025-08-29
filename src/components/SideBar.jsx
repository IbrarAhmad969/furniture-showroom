import NavLinks from "./NavLinks";

const SideBar = ({
  handleTouchEnd,
  dropDownRef,
  mobileMenu,
  setMobileMenu,
  mobile,
  linkRef,
}) => {
  return (
    <div
      onTouchEnd={handleTouchEnd}
      ref={dropDownRef}
      className={`bg-white dark:bg-zinc-900 fixed top-[60px] left-0 w-[80vw] max-w-[250px] h-[calc(100vh-60px)] px-4 py-8 universal-shadow transform transition-all duration-900 ease-in-out z-50 sm580:hidden
        ${
          mobileMenu
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
    >
      <button
        className="absolute top-3 right-4 bg-black text-white universal-shadow border px-3 rounded-2xl dark:text-gray-300"
        onClick={() => setMobileMenu(false)}
      >
        ✕
      </button>
      <NavLinks
        mobile={mobile}
        linkRef={linkRef}
        onLinkClicked={() => setMobileMenu(false)}
      />
    </div>
  );
};

export default SideBar;
