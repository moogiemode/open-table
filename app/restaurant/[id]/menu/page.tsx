import { Menu, RestaurantNavBar } from '../components';

export const metadata = {
  title: 'RESTAURANT NAME MENUUUU!!!',
};

export default function RestaurantMenu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Menu />
      </div>
    </>
  );
}
