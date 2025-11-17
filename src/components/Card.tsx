import GreenImage from "@/assets/images/grain.jpg";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "relative z-0 overflow-hidden rounded-3xl bg-gray-800 after:content-[''] after:absolute after:inset-0 after:z-10 after:pointer-events-none after:rounded-3xl after:outline after:outline-white/20 after:-outline-offset-2 ",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${GreenImage.src})` }}
      ></div>
      {children}
    </div>
  );
};
