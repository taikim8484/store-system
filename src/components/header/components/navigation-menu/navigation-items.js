import AccountCircle from '@material-ui/icons/AccountCircle';
import LocalShipping from '@material-ui/icons/LocalShipping';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Stock from '@material-ui/icons/PlaylistAddCheck';
import Assignment from '@material-ui/icons/Assignment';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Contacts from '@material-ui/icons/Contacts';
import People from '@material-ui/icons/People';

const items = [{
  Icon: Contacts,
  titleKey: 'CASHIER',
  route: '/dashboard/cashier',
}, {
  Icon: ShoppingCart,
  titleKey: 'SALES',
  route: '/dashboard/sale',
}, {
  Icon: LocalOffer,
  titleKey: 'PRODUCTS',
  route: '/dashboard/product',
}, {
  Icon: Stock,
  titleKey: 'STOCK',
  route: '/dashboard/stock',
}, {
  Icon: Assignment,
  titleKey: 'BUDGETS',
  route: '/dashboard/budget',
}, {
  Icon: People,
  titleKey: 'CUSTOMERS',
  route: '/dashboard/customer',
}, {
  Icon: LocalShipping,
  titleKey: 'PROVIDERS',
  route: '/dashboard/provider',
}, {
  Icon: AccountCircle,
  titleKey: 'USERS',
  route: '/dashboard/user',
}];

export default items;
