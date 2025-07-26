
const AuthLayout = ({children}) => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 pt-20">
    <div className=" bg-zinc-200 dark:bg-zinc-800 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-md p-6 sm:p-8 shadow-md">
      {children}
    </div>
  </div>
  )
}

export default AuthLayout
