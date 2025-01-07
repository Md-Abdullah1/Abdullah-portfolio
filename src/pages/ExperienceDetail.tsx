import { useEffect, useState } from "react";
// import Approach from "../components/Approach";
import { workExperience } from "../data/index";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { TextGenerateEffect2 } from "../components/ui/TextGenerateEffect";
import { VscDebugBreakpointLog } from "react-icons/vsc";
interface ExperienceDetailsType {
  heading: string;
  point: string;
}

interface ExperienceType {
  id: number;
  companyName: string;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
  details: ExperienceDetailsType[];
  date: {
    startDate: string;
    endDate: string;
  };
}

const ExperienceCard: React.FC<ExperienceType> = ({
  companyName,
  title,
  className,
  thumbnail,
  details,
  date,
}) => {
  return (
    <motion.div
      className={`text-white p-6 rounded-lg shadow-lg font-sans ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center space-x-4">
        <motion.img
          src={thumbnail}
          alt={`${companyName} logo`}
          className="w-20 h-20 object-contain"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              type: "spring",
              damping: 5,
            }}
            className="text-3xl font-bold"
          >
            {title}
          </motion.h3>
          <p className=" text-xl text-white-100">{companyName}</p>
          <p className=" text-white-200 text-lg">{`${date.startDate} - ${date.endDate}`}</p>
        </div>
      </div>
      {/* <p className="mt-4 text-gray-700">{desc}</p> */}
      <div className="mt-6 space-y-4">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.6 }}
          >
            <h4 className="text-lg font-medium text-gray flex items-center gap-3">
              <VscDebugBreakpointLog /> {detail.heading} :
            </h4>
            <p className="text-gray-60 indent-8">{detail.point}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ExperienceDetail = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState<ExperienceType | null>(null);

  const fetchSingleDetail = () => {
    const data = workExperience.find((item) => item.id === Number(id)) ?? null;
    setExperience(data);
  };

  useEffect(() => {
    fetchSingleDetail();
  }, [id]);
  return (
    <section className="w-full py-20">
      <h1 className="heading flex justify-center gap-2">
        *_*{" "}
        <span>
          <TextGenerateEffect2
            words={experience?.companyName || ""}
            className="text-2xl"
            textColor="#CBACF9"
            textSize="35px"
          />
        </span>{" "}
        *_*
      </h1>

      <div className=" w-3/4 m-auto">
        {experience && <ExperienceCard {...experience} />}
      </div>
    </section>
  );
};

export default ExperienceDetail;
