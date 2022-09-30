import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';
import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  return (
    <div className="details-contanier">
      <div className="details-content-contanier">
        <h1>Tela detalhes do filme id: 1</h1>
      </div>

      <div className="base-card review-content-contanier">
          {hasAnyRoles(['ROLE_MEMBER']) && (
            <ReviewForm movieId={movieId} />
          )}
      </div>

      <div className="base-card listing-content-contanier">
        <ReviewListing />
        <ReviewListing />
      </div>
    </div>
  );
};

export default MovieDetails;
