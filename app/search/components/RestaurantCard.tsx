import { Price, Stars } from '@/app/components';
import { calculateReviewRatingsAverage } from '@/utils';
import { Cuisine, Location, PRICE, Review } from '@prisma/client';
import Link from 'next/link';
import { FC } from 'react';

interface RestaurantCardProps {
  restaurant: {
    id: number;
    name: string;
    main_image: string;
    price: PRICE;
    cuisine: Cuisine;
    location: Location;
    slug: string;
    reviews: Review[];
  };
}

const renderRatingstext = (reviews: Review[]) => {
  const rating = calculateReviewRatingsAverage(reviews);
  return rating > 4 ? 'Awesome' : rating > 3 ? 'Good' : rating > 0 ? 'Average' : '';
};
export const RestaurantCard: FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="border-b flex pb-5 ml-4">
      <img src={restaurant.main_image} alt="" className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <Stars reviews={restaurant.reviews} />
          <p className="ml-2 text-sm">{renderRatingstext(restaurant.reviews)}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};
