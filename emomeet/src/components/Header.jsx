import Headericon from "./HeaderIcon"

const Header = () => {
  return (
    <div className="bg-primary w-full">
      <div className="px-[0.5rem] flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="logo" className="size-13 lg:size-20" />
        </div>
        <div className="">
          <Headericon className="size-10" />
        </div>
      </div>
      <div className="hidden">
        
      </div>
    </div>
  )
}

export default Header