const App = () => {
const categories = [
  {
    id: 1,
    title: 'Herramientas',
  },
  {
    id: 2,
    title: 'Materiales de Construcción',
  },
  {
    id: 3,
    title: 'Fontanería',
  },
  {
    id: 4,
    title: 'Electricidad',
  },
  {
    id: 5,
    title: 'Pinturas y Acabados',
  }
]

  return (
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Comprar ahora</p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default App;
