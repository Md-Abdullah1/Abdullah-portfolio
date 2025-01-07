import React from "react";

interface Props {
  embed: string;
}

const Embeded: React.FC<Props> = ({ embed }) => {
  return <div dangerouslySetInnerHTML={{ __html: embed }} />;
};

export default Embeded;
