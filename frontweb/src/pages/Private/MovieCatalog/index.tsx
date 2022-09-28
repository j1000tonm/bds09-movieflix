import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div>
      {page?.content.map((item) => (
        <p key={item.id}>Acessar /movies/{item.id}</p>
      ))}
    </div>
  );
};

export default MovieCatalog;
