import { useEffect, useState } from "react";
// import Approach from "../components/Approach";
import { projects } from "../data/index";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { TextGenerateEffect2 } from "../components/ui/TextGenerateEffect";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import MagicButton from "../components/MagicButton";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import Embeded from "../components/Embeded";

interface ProjectInterace {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  details: string[];
  gallery?: string[];
  embed?: string;
  githubLink: string;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const [projectDetails, setprojectDetails] = useState<ProjectInterace | null>(
    null
  );

  const fetchSingleDetail = () => {
    const data = projects.find((item) => item.title === id) ?? null;
    setprojectDetails(data);
  };

  const redirectToWebsite = () => {
    window.open(projectDetails?.link, "_blank");
  };
  const redirectToGithub = () => {
    window.open(projectDetails?.githubLink, "_blank");
  };

  useEffect(() => {
    fetchSingleDetail();
  }, [id]);
  return (
    <section className="w-full py-20">
      <h1 className="heading flex justify-center gap-2 max-md:text-sm">
        *_*{" "}
        <span>
          <TextGenerateEffect2
            words={projectDetails?.title || ""}
            className="text-2xl max-md:text-md"
            textColor="#CBACF9"
            textSize="35px"
          />
        </span>{" "}
        *_*
      </h1>

      <div className="w-2/4  m-auto max-md:w-full">
        <div className=" shadow-lg rounded-lg p-6  w-full">
          <img
            src={projectDetails?.img}
            alt={projectDetails?.title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h1 className="text-3xl font-semibold mb-4">
            {projectDetails?.title}
          </h1>
          <p className="text-gray-700 mb-4">{projectDetails?.des}</p>
          <h2 className="text-2xl font-semibold mb-2">Details:</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            {projectDetails?.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Technologies:</h2>
          <div className="flex space-x-4 mb-6 pt-3">
            {projectDetails?.iconLists.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="Technology Icon"
                className="w-10 h-10"
              />
            ))}
          </div>

          <div className="flex justify-between max-md:flex-col max-md:gap-3">
            <MagicButton
              title="View Project"
              handleClick={redirectToWebsite}
              position="left"
              icon={<CiGlobe />}
            />
            <MagicButton
              title="View Code"
              handleClick={redirectToGithub}
              position="left"
              icon={<FaGithub />}
            />
          </div>

          <h2 className="text-2xl font-semibold my-6">Gallery:</h2>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
            {projectDetails?.gallery?.map((item) => (
              <div key={item}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={item}
                  alt={item}
                />
              </div>
            ))}
          </div>

          <br />

          <div>
            <div className="w-full">
              {projectDetails?.embed && (
                <Embeded embed={projectDetails.embed} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
