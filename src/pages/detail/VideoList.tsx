import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import Video from '../../components/Video/Video';
import { IVideo } from '../../interface';

interface VideoListProps{
    id: number;
}
const VideoList : React.FC<VideoListProps> = (props) => {
    const { category } = useParams();

    const [videos, setVideos] = useState<IVideo[]>([]);
  
    useEffect(() => {
      const getVideos = async () => {
        const res = await tmdbApi.getVideos(category!, props.id);
        console.log('video API: ', res);
        
        setVideos(res?.results.slice(0, 5)!);
      };
  
      getVideos();
    }, [category, props.id]);
    return (
        <>
         {
             videos.map((item, i) => {
                 <Video key={i} item={item} />
             })
         }   
        </>
    );
};


export default VideoList;