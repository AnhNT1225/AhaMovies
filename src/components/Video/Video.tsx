import React, { useEffect, useRef } from "react";
import { IVideo } from "../../interface";

interface VideoProps {
  item: IVideo;
}
const Video: React.FC<VideoProps> = (props) => {
  const { item } = props;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const height = (iframeRef.current?.offsetWidth! * 9) / 16 + "px";
    iframeRef.current?.setAttribute("height", height)!;
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default Video;
