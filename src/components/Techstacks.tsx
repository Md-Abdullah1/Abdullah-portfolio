import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

const InfiniteTechStacks = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        // max-w-7xl to w-screen
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          // change gap-16
          " flex min-w-full shrink-0 gap-16 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
            className="  relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-6 d-flex justify-center items-center"
            style={{
              //   background:
              //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            // change to idx cuz we have the same name
            key={idx}
          >
            <img src={item.logo} alt={item.name} width={100} height={100} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Techstacks = () => {
  const items = [
    { logo: "/assets/svgs/html.svg", name: "HTML" },
    { logo: "/assets/svgs/css.svg", name: "CSS" },
    { logo: "/assets/svgs/bootstrap5.svg", name: "Bootstrap5" },
    { logo: "/assets/svgs/tailwindcss.svg", name: "taiwind" },
    { logo: "/assets/svgs/javascript.svg", name: "Javacript" },
    { logo: "/assets/svgs/materialui.svg", name: "Material UI" },
    { logo: "/assets/svgs/react.svg", name: "React" },
    { logo: "/assets/svgs/typescript.svg", name: "Typescript" },
    { logo: "/assets/svgs/nodejs.svg", name: "Node js" },
    { logo: "/assets/svgs/mongodb.svg", name: "MongoDB" },
    // { logo: "/assets/svgs/redis.svg", name: "Reis" },
    { logo: "/assets/svgs/express.svg", name: "Express js" },
    // { logo: "/assets/svgs/wordpress.svg", name: "Worpress" },
    { logo: "/assets/svgs/next.svg", name: "Next JS" },
  ];

  const items2 = [
    { logo: "/assets/svgs/vscode.svg", name: "VSCode" },
    { logo: "/assets/svgs/github.svg", name: "Github" },
    { logo: "/assets/svgs/postman.svg", name: "Postman" },
    { logo: "/assets/svgs/bitbucket.svg", name: "Bitbucket" },
    { logo: "/assets/svgs/aws.svg", name: "AWS" },
    // { logo: "/assets/svgs/lambda.svg", name: "Lamdba" },
    { logo: "/assets/svgs/vercel.svg", name: "Vercel" },
  ];
  return (
    <div>
      <h1 className="heading" id="techstack">
        The <span className="text-purple">Technologies & Tools</span> I Excel In
      </h1>

      <br />
      <br />
      <br />

      <div className="w-full overflow-hidden">
        <InfiniteTechStacks
          items={items}
          direction="right"
          speed="slow"
          pauseOnHover={false}
        />

        <br />
        <br />
        <InfiniteTechStacks
          items={items2}
          direction="left"
          speed="normal"
          pauseOnHover={false}
        />
      </div>
    </div>
  );
};

export default Techstacks;
