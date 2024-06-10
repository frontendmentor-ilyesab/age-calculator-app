export default function SubmitButton() {
  return (
    <div className="mb-10 mt-8 flex items-center lg:mb-2 lg:mt-1">
      <span className="inline-block h-px grow bg-grey-light"></span>
      <button
        type="submit"
        className="size-16 rounded-full bg-purple bg-[url('../assets/images/icon-arrow.svg')] bg-[length:23px_22px] bg-center bg-no-repeat focus:cursor-pointer focus:bg-black-off focus:outline-none active:cursor-pointer active:bg-black-off sm:order-last sm:size-20 sm:bg-[url('../assets/images/icon-arrow-desktop.svg')] sm:bg-[length:46px_44px] lg:size-24"
      ></button>
      <span className="inline-block h-px grow bg-grey-light"></span>
    </div>
  );
}
