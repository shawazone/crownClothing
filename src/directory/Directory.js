
import CategoryItem from "../category-item/category-item.component"
import './directory,styles.scss'
const Directory = ({categories}) => {
    return (
        <div className ='directory-container'>
            {categories.map((category,i) => (
              <CategoryItem key={i} category={category}/> // use i instead of ids

            ))}
        </div>
    )
};
export default Directory;