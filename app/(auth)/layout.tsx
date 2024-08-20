import { Logo } from "./sign-up/[[...sign-up]]/_components/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-5 ">
      
      <Logo/>
      {children}</div>
  );
};

export default AuthLayout;
