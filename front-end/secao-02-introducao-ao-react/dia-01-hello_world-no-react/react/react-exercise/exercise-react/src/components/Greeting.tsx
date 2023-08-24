function Greeting() {
  const firstName = 'Josué';
  const lastName = 'Azevedo';

  return (
    <div>
      <h1 className="greeting">
        {' '}
        {`Olá, ${firstName} ${lastName}`}
        <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
      </h1>
    </div>
  );
}

export default Greeting;
