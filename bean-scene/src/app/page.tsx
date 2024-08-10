import { Banner, CoffeeList, DiscoverBestCoffee, Feedback, Footer, GetChance, Header, Newsletter, WhyWeDifferent } from "@/components";
import Image from "next/image";
//import { useSelector, useDispatch } from 'react-redux';


export default function Home() {

  // const count = useSelector((state: any) => state.example.value);
  // const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Banner />
      <DiscoverBestCoffee />
      <CoffeeList />
      <WhyWeDifferent />
      <GetChance />
      <Feedback />
      <Newsletter />
      <Footer />

      {/* <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div> */}
    </>
  );
}
