function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Paris",
    },
    {
      id: 5,
      title: "Toronto",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => {
        return (
          <button className="text-white text-lg font-medium" key={city.id}>
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButtons;
