import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { category } from '../../api/tmdbApi';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

import './movie-search.scss';

interface MovieSearchProps {
    keyword: string;
    category: string;
}

const MovieSearch : React.FC<MovieSearchProps> = (props) => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const goToSearch = useCallback(
      () => {
        if(keyword.trim().length >0){
            navigate(`/${category[props.category]}/search/${keyword}`)
        }
      },
      [keyword, props.category, navigate],
    )
    
    useEffect(() => {
      const enterEvent = (e : any) => {
          e.preventDefault();
          if(e.keyCode === 13){
              goToSearch()
          }
      }

      document.addEventListener('keyup', enterEvent)
      return() =>{
          document.removeEventListener('keyup', enterEvent)
      }
    }, [keyword, goToSearch])
    
    return (
        <div className='movie-search'>
            <Input type='text' placeholdder='Enter keyword' value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <Button className='small' onClick={goToSearch} >Search</Button>
        </div>
    );
};

export default MovieSearch;