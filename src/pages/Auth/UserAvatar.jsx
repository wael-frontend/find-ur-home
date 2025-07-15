export default function UserAvatar() {
  return (
    <div className=" max-sm:hidden  lg:flex items-center gap-[1.625rem] md:gap-[26px] ">
      <img
        src="/default-user.jpg" // Removed /public prefix
        className="w-14 aspect-square object-cover object-center rounded-full"
      />
      <p className="text-2xl font-medium">user name</p>
    </div>
  );
}
