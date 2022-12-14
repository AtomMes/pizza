import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62f5fe50612c13062b44104a.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (err) {
        alert("something bad happened");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>"Loading..."</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.name}</h2>
      <h4>{pizza.price}</h4>
      <Link to='/'>
      <button className="button button--outline button--add">
        <span>Назад</span>
      </button>
      </Link>
    </div>
  );
};

export default FullPizza;
