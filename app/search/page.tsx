import { PRICE, PrismaClient } from '@prisma/client';
import { Header, RestaurantCard, SearchSideBar } from './components';

const prisma = new PrismaClient();

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const select = {
  id: true,
  name: true,
  main_image: true,
  price: true,
  cuisine: true,
  location: true,
  slug: true,
  reviews: true,
};

const fetchRestaurantsByCity = ({ city, cuisine, price }: SearchParams) => {
  if (!city && !cuisine && !price) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      ...(city && {
        location: {
          name: {
            equals: city.toLowerCase(),
          },
        },
      }),
      ...(cuisine && {
        cuisine: {
          name: {
            equals: cuisine.toLowerCase(),
          },
        },
      }),
      ...(price && {
        price: {
          equals: price,
        },
      }),
    },
    select,
  });
};

const fetchLocationsAndCuisines = async () => {
  const locations = await prisma.location.findMany();
  const cuisines = await prisma.cuisine.findMany();
  return { locations, cuisines };
};

export default async function Search({ searchParams }: { searchParams: SearchParams }) {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const { locations, cuisines } = await fetchLocationsAndCuisines();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar locations={locations} cuisines={cuisines} searchParams={searchParams} />
        <div className="w-5/6">{restaurants.length ? restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />) : <h1>No restaurants found</h1>}</div>
      </div>
    </>
  );
}
