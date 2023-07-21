import { useId, useContext } from 'react'
import './Filters.css'
import { FiltersContext } from '../../context/FilterContext'

const Filters = () => {

    const {filters, setFilters} = useContext(FiltersContext)

    const minPriceId = useId()
    const categoryFilterId = useId()

 
    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value,
        }))
    }

    return (
        <div className="filters">
            <div className="range">
                <label htmlFor="price">
                    Precio minimo
                </label>
                <input 
                    type="range"
                    id={minPriceId} 
                    min="0" 
                    max="1000" 
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>
                    {filters.minPrice}
                </span>
            </div>
            <div className="category">
                <label htmlFor="category">
                    Categoría
                </label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="fragrances">Fragancias</option>
                    <option value="groceries">Comida</option>
                    <option value="home-decoration">Home-deco</option>
                    <option value="smartphones">Celulares</option>
                    <option value="laptops">Notebooks</option>
                    <option value="skincare">Skin-care</option>
                </select>
            </div>
        </div>
    )
}

export default Filters