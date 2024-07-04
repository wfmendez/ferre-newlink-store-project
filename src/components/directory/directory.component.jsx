import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss'
import categoriesData from './categories-data.json'

const Directory = () => {
    return (
        <div className="categories-container">
            {categoriesData.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
};

export default Directory