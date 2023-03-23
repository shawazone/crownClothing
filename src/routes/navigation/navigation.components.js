import { Fragment, useContext } from 'react';
import { Outlet,Link} from 'react-router-dom';
// import {ReactComponet as  CrwnLogo} from './crown.svg'
import CrwnLogo from '../../assets/crown.svg'
import CartIcon from '../../Components/cart-icon/cart-icon.components';
import CartDropdown from '../../Components/cart-dropdown/cart-dropDowm.component';
import { UserConntext } from '../../contexts/user.context';
import { CartContext, CartProvider } from '../../contexts/cart.context';
import { signOutUser } from '../../utility/firebase/firebase.utility';
import {NavigationContainer, NavLink, LogoContainer, NavLinks} from './navigation.styles.js';

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
        <NavigationContainer>
        
          <LogoContainer to='/'>
          <img 
          src={CrwnLogo}
          alt="hi"
          />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink> ):(
            <NavLink  to='/auth'>
                Sign In
            </NavLink>
              )
            }
      <CartIcon/>

          </NavLinks>
          {isCartOpen && <CartDropdown/>}
          </NavigationContainer>
         <Outlet/>
       </Fragment>
    )
   } ;
   export default Navigation;