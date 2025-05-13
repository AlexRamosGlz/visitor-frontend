function Counter({ count }) {
  return (
    <>
      <span className="count" data-testid="count">
        {count}
      </span>
      <p className="text">people have visited this page</p>
    </>
  );
}

export default Counter;
