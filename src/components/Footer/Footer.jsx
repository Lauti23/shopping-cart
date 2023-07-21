import { useCart } from '../../hooks/useCart';
import { useFilters } from '../../hooks/useFilters'
import './Footer.css'

const Footer = () => {

    const { filters } = useFilters();
    const { cart } = useCart()

    return (
        <footer className='footer'>
            {
                JSON.stringify(cart, null, 2)
            }
        </footer>
    )
}

export default Footer