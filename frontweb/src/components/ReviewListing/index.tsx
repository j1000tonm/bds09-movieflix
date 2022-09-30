import { ReactComponent as StarIcon } from 'assets/images/star.svg';

import './styles.css';

const ReviewListing = () => {
  return (
    <>
      <div className="user-card">
        <StarIcon />
        <h6>Maria Silva</h6>
      </div>
      <div className="review-card">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </>
  );
};

export default ReviewListing;
