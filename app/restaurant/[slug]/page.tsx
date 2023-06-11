import { PrismaClient } from '@prisma/client';
import { Description, Images, Rating, ReservationCard, RestaurantNavBar, Reviews, Title } from './components';

export const metadata = {
  title: 'RESTAURANT NAME!!!',
};

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fetchRestaurantBySlug = async (id: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug: id,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });
  if (!restaurant) {
    throw new Error('Restaurant not found');
  }
  return restaurant;
};

export default async function RestaurantDetails({ params: { id } }: { params: { id: string } }) {
  const restaurant = await fetchRestaurantBySlug(id);
  console.log(restaurant);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}
