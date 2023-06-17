import { PrismaClient } from '@prisma/client';
import { Header, RestaurantCard, SearchSideBar } from './components';

const prisma = new PrismaClient();

const fetchRestaurantsByCity = (city?: string) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };
  if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    select,
  });
};

export default async function Search({ searchParams }: { searchParams: { city: string } }) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city.toLocaleLowerCase());
  console.log(restaurants);
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">{restaurants.length ? restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />) : <h1>No restaurants found</h1>}</div>
      </div>
    </>
  );
}
