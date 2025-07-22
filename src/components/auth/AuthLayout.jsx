
const AuthLayout = ({children}) => {
  return (
    <div className="flex justify-center items-center m-3">
    <div className="dark:bg-zinc-800 bg-zinc-200 w-[700px] min-h-screen rounded-md p-10">
      {children}
    </div>
  </div>
  )
}

export default AuthLayout
