import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl">Dashboard </h1>
      <UserButton afterSignOutUrl="/" />

    </div>
  );
}

export default page; 