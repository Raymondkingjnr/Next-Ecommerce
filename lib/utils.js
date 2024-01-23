export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export const updateSearchParams = (type, value) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, encodeURIComponent(value));

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
