import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  ModalTriggerExit,
} from "./ui/AnimatedModal";

export default function ModalPopup() {
  // const images = [
  //   "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // ];

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="flex justify-center ">
          <span className="px-2 py-2 bg-gray-200 text-black dark:bg-black-100  dark:text-white border border-gray-300 rounded-md text-sm w-28">
            Detail Intro
          </span>
        </ModalTrigger>
        <ModalBody className="md:max-w-[90%]">
          <ModalContent>
            <h4 className="text-lg md:text-2xl  dark:text-neutral-100 font-bold text-center mb-8">
              <span className="px-4 py-2 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                About Myselft
              </span>{" "}
            </h4>
            <div className="flex justify-center items-center">
              <ul className="space-y-5 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                  I am a passionate MERN (MongoDB, Express.js, React.js, and
                  Node.js) Stack Developer with a strong track record in
                  creating innovative and dynamic web applications. My expertise
                  lies in developing robust and scalable solutions, with a
                  particular focus on HRMS project.
                </li>
                <li>
                  With a background in web development and a deep understanding
                  of front-end and back-end technologies, I have successfully
                  delivered projects that have enhanced user experiences. I
                  thrive in dynamic environments where I can leverage my
                  problem-solving skills to overcome challenges and deliver
                  exceptional results.
                </li>
                <li>
                  Throughout my career, I have consistently demonstrated a
                  strong work ethic and dedication to achieving excellence. I am
                  well-versed in the latest industry trends and best practices,
                  and I continuously seek opportunities to expand my knowledge
                  and skill set. My ability to quickly learn and adapt to new
                  technologies has been instrumental in my success as a
                  developer.
                </li>

                <li>
                  I  developed many projects using
                   MERN stack and deployed on platforms like Render, Vercel.
                  This experience allowed me to showcase my proficiency in
                  creating responsive and user-friendly interfaces.
                </li>
              </ul>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <ModalTriggerExit className="px-2 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancle
            </ModalTriggerExit>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
