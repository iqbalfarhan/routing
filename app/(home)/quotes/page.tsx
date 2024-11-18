const HomePage = async () => {
  const response = await fetch('https://dummyjson.com/quotes?delay=5000');
  const data = await response.json();

  return <div>ini dari halaman quotes {JSON.stringify(data)}</div>;
};

export default HomePage;
