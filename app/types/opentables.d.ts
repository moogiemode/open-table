export interface OTRestaurant {
  id: number;
  name: string;
  main_image: string;
  images: string;
  description: string;
  open_time: string;
  close_time: string;
  slug: string;
  price: 'CHEAP' | 'REGULAR' | 'EXPENSIVE';
  items: OTRestaurantItem[];
  location: OTRestaurantLocation;
  cuisine: OTRestaurantCuisine;
  created_at: any;
  updated_at: any;
}

interface OTRestaurantItem {
  id: number;
  name: string;
  price: string;
  description: string;
  restaurant_id: number;
  restaurant: OTRestaurant;
  created_at: any;
  updated_at: any;
}

interface OTRestaurantLocation {
  id: number;
  name: string;
  restaurants: OTRestaurant[];
  created_at: any;
  updated_at: any;
}

interface OTRestaurantCuisine {
  id: number;
  name: string;
  restaurants: OTRestaurant[];
  created_at: any;
  updated_at: any;
}
