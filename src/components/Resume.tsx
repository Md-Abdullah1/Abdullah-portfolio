import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import MagicButton from "./MagicButton";
import { FaDownload } from "react-icons/fa6";

const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

  const url: string = "/assets/documents/Md-Abdullah's-Resume.pdf";

  function downloadFile() {
    const a: HTMLAnchorElement = document.createElement("a");

    a.href = url;
    a.download = url.split("/").pop() || "";
    a.click();
  }

  return (
    <div className="m-auto w-1/2 max-md:w-full">
      <h1 className="heading mb-6" id="about">
        Checkout My <span className="text-purple">Resume</span>
      </h1>
      <div className="rounded-lg w-full overflow-auto shadow-lg">
        <Document
          file={{ url }}
          onLoadError={(error) => console.log(error)}
          loading={
            <div className="flex justify-center p-3">
              <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200 w-fit">
                loading...
              </div>
            </div>
          }
        >
          <Page pageNumber={1} />
        </Document>
      </div>
      <div className="mt-3 flex justify-center cursor-pointer">
        <MagicButton
          title="Download Resume"
          position="right"
          icon={<FaDownload />}
          handleClick={downloadFile}
          otherClasses="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Resume;
