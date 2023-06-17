import { calculateReviewRatingsAverage } from '@/utils';
import { Review } from '@prisma/client';
import Image from 'next/image';
import emptyStar from '../../public/icons/empty-star.png';
import fullStar from '../../public/icons/full-star.png';
import halfStar from '../../public/icons/half-star.png';

export const Stars = ({ reviews, rating }: { reviews: Review[]; rating?: number }) => {
  const finalRating = rating || calculateReviewRatingsAverage(reviews);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const difference = finalRating - i;

      if (difference > 0.6) {
        stars.push(fullStar);
      } else if (difference > 0.2) {
        stars.push(halfStar);
      } else {
        stars.push(emptyStar);
      }
    }

    return stars.map((star, index) => <Image src={star} alt="" key={index} className="w-4 h-4 mr-1" />);
  };

  return <div className="flex items-center">{renderStars()}</div>;
};
