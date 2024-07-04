import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss'
import directoryData from './directory-data.json'

const Directory = () => {
    return (
        <div className="directory-container">
            {directoryData.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
};

export default Directory