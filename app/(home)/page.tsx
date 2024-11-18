import { redirect } from 'next/navigation';

const HomePage = async () => {
  const response = await fetch('https://dummyjson.com/quotes');
  const data = await response.json();

  if (data) {
    redirect('/setting');
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
