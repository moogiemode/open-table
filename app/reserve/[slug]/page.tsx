import { Form, Header } from './components';
export const metadata = {
  title: 'RESERVE AT RESTAURANT NAME!!!',
};
export default function ReservationPage() {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
}
