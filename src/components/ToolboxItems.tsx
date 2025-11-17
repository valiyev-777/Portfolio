import { Techicon } from "@/components/techIcon";
import { Fragment, type ElementType } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Direction = "left" | "right";

export const ToolboxItems = ({
  itmes,
  className,
  itmesWrapperClassName,
  direction = "left",
  duration = 25,
}: {
  itmes: {
    title: string;
    iconType: ElementType;
  }[];
  className?: string;
  itmesWrapperClassName?: string;
  direction?: Direction;
  duration?: number;
}) => {
  return (
    <div
      className={twMerge(
        "flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <motion.div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6 will-change-transform",
          itmesWrapperClassName
        )}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {itmes.map((item) => (
              <div
                key={`${item.title}-${idx}`}
                className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <Techicon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};
