import { StyleSheet } from 'react-native';
import { authStyles } from './auth';
import { dashboardStyles } from './dashboard';
import { tabBarStyles } from './tabBar';
import { shopStyles } from './shop';
import { notificationStyles } from './notification';
import { profileStyles } from './profile';
import { productStyles } from './product';
import { reservationStyles } from './reservation';
import { orderStatusStyles } from './orderStatus';
import { adminDashboardStyles } from './adminDashboard';
import { adminProductsStyles } from './adminProducts';
import { adminOrdersStyles } from './adminOrders';

export { colors } from './colors';

export const styles = StyleSheet.create({
  ...authStyles,
  ...dashboardStyles,
  ...tabBarStyles,
  ...shopStyles,
  ...notificationStyles,
  ...profileStyles,
  ...productStyles,
  ...reservationStyles,
  ...orderStatusStyles,
  ...adminDashboardStyles,
  ...adminProductsStyles,
  ...adminOrdersStyles,
});