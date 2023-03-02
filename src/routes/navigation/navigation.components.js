import { Fragment, useContext } from 'react';
import { Outlet,Link} from 'react-router-dom';
// import {ReactComponet as  CrwnLogo} from './crown.svg'
import CrwnLogo from '../../assets/crown.svg'
import CartIcon from '../../Components/cart-icon/cart-icon.components';
import CartDropdown from '../../Components/cart-dropdown/cart-dropDowm.component';
import { UserConntext } from '../../contexts/user.context';
import { CartContext, CartProvider } from '../../contexts/cart.context';
import { signOutUser } from '../../utility/firebase/firebase.utility';
import './navigation.styles.scss'

const Navigation =() =>{
  const {currentUser } = useContext(UserConntext);
  const {isCartOpen}  = useContext(CartContext);
  // const signOutHandler = async () => {
  // // const res = await signOutUser();
  // // setCurrentUser(null);
  //   // console.log(res);
  // }


  // console.log(currentUser);
    return(
       <Fragment>
         <div className='navigation'>
        
          <Link className='logo-container' to='/'>
          <img 
          src={CrwnLogo}
          alt="hi"
          />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (
              <span className='nav-link' onClick={signOutUser}>
                SIGN OUT
              </span> ):(
            <Link className='nav-link' to='/auth'>
                Sign In
            </Link>
              )
            }
      <CartIcon/>

          </div>
          {isCartOpen && <CartDropdown/>}
         </div>
         <Outlet/>
       </Fragment>
    )
   } ;
   export default Navigation;