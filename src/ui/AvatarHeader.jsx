export default function AvatarHeader() {
  return (
    <div className=" flex justify-between ">
      <img
        src="/houseLogo.png"
        alt=""
        className=" h-[50px] mr-[50px] block w-20 aspect-square object-cover object-center rounded-full  outline-[var(--color-grey-100)]"
      />
    </div>
  );
}
