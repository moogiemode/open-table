import {
  Description,
  Images,
  Rating,
  ReservationCard,
  RestaurantNavBar,
  Reviews,
  Title,
} from './components';

export default function RestaurantDetails() {
  return (
    <>
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Title />
          <Rating />
          <Description />
          <Images />
          <Reviews />
        </div>
        <div className="w-[27%] relative text-reg">
          <ReservationCard />
        </div>
      </div>
    </>
  );
}
