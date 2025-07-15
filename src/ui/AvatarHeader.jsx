export default function AvatarHeader() {
  return (
    <div className="w-[50px] ">
      <img
        src="/public/houseLogo.png"
        alt=""
        className=" h-[90px] mr-[50px] block w-14 aspect-square object-cover object-center rounded-full  outline-[var(--color-grey-100)]"
      />
    </div>
  );
}
