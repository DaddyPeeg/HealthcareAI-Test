import Button from "@components/core/Button";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Input from "@components/core/Input";

const SignInPage = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <main className="flex-1 flex">
      <div
        style={{
          backgroundImage: `url('/images/splash.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-20 bg-black p min-w-[480px] w-1/3 overflow-hidden hidden lg:block max-w-[640px] relative"
      >
        <div className="z-50 max-w-[405px] w-full space-y-2">
          <h1 className="text-white font-bold text-5xl leading-none">
            Health care something
          </h1>
          <p className="text-gray ">
            Chat with the smartest AI - Experience the power of AI with us
          </p>
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="w-full h-full relative flex justify-center items-center">
          <a
            href="/"
            className="absolute top-2 cursor-pointer hover:bg-gray-light transition right-2 bg-accent p-1 rounded-full"
          >
            <IoClose className="size-4" />
          </a>
          <div className="space-y-4 flex flex-col max-w-md w-full items-center">
            <h1 className="text-3xl font-bold">
              Federal<span className="text-primary text-3xl">Plans</span>
            </h1>
            <div className="flex gap-x-2 w-full p-1.5 rounded-xl bg-[#F3F5F7]">
              <a href="/sign-in" className="w-full">
                <Button
                  className={twMerge(
                    "py-2.5 text-xs rounded-xl bg-transparent opacity-50 hover:bg-white hover:text-black hover:opacity-100",
                    pathname === "/sign-in" &&
                      "bg-primary text-white opacity-100 hover:opacity-100 hover:bg-primary hover:text-white"
                  )}
                >
                  Sign in
                </Button>
              </a>
              <a href="/sign-up" className="w-full">
                <Button
                  className={twMerge(
                    "py-2.5 text-xs rounded-xl bg-transparent hover:bg-white opacity-50 hover:text-black hover:opacity-100 ",
                    pathname === "/sign-up" &&
                      "bg-primary text-white hover:opacity-100 opacity-100 hover:bg-primary hover:text-white"
                  )}
                >
                  Sign up
                </Button>
              </a>
            </div>
            <div className="space-y-2 w-full">
              <Button
                className={twMerge(
                  "py-3 flex justify-center items-center bg-transparent rounded-xl hover:bg-white hover:text-black hover:opacity-100 border-2 border-[#E8ECEF]"
                )}
              >
                <FcGoogle className="mr-2" />
                Continue with Google
              </Button>
              <Button
                className={twMerge(
                  "py-3  flex justify-center items-center bg-transparent rounded-xl hover:bg-white hover:text-black hover:opacity-100 border-2 border-[#E8ECEF]"
                )}
              >
                <BsApple className="mr-2" />
                Continue with Apple
              </Button>
            </div>
            <div className="inline-flex items-center justify-center w-full ">
              <hr className="w-full h-[2px] rounded-full my-4 bg-gray-200 border-0 bg-gray" />
              <span className="absolute px-3 text-xs font-medium text-gray -translate-x-1/2 bg-white left-1/2">
                OR
              </span>
            </div>
            <Input
              logo={<MdEmail className="size-5 text-gray" />}
              placeholder="Email or Username"
            />
            <Input
              logo={<IoIosLock className="size-5 text-gray" />}
              placeholder="Password"
              type="password"
            />
            <a
              href="#todo:forgot-password"
              className="text-primary hover:underline text-sm self-start"
            >
              Forgot password?
            </a>
            <Button className="py-3 text-white bg-primary rounded-xl">
              Sign in to Healthcare Plans
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
