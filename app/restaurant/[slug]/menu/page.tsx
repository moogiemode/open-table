import { PrismaClient } from '@prisma/client';
import { Menu, RestaurantNavBar } from '../components';

const prisma = new PrismaClient();

export const metadata = {
  title: 'RESTAURANT NAME MENUUUU!!!',
};

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error('Restaurant not found!');
  }

  return restaurant.items;
};

export default async function RestaurantMenu({ params }: { params: { slug: string } }) {
  const menu = await fetchRestaurantMenu(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
}
