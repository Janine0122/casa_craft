import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrdersProvider } from './context/OrdersContext';
import Splash_screen from './screens/Splash_screen';
import Welcome_screen from './screens/Welcome_screen';
import Login_screen from './screens/Login_screen';
import SignUp_screen from './screens/SignUp_screen';
import Dashboard_screen from './screens/Dashboard_screen';
import Shop_screen from './screens/Shop_screen';
import Notification_screen from './screens/Notification_screen';
import Profile_screen from './screens/Profile_screen';
import Item_details_screen from './screens/Item_details_screen';
import Customization_screen from './screens/Customization_screen';
import Reservation_screen from './screens/Reservation_screen';
import Order_status_screen from './screens/Order_status_screen';
import Admin_dashboard_screen from './admin/Admin_dashboard_screen';
import Admin_products_screen from './admin/Admin_products_screen';
import Admin_orders_screen from './admin/Admin_orders_screen';
import Admin_order_details_screen from './admin/Admin_order_details_screen';
import Admin_reports_screen from './admin/Admin_reports_screen';

const Stack = createNativeStackNavigator();

const tabScreenOptions = {
  animation: 'fade' as const,
  animationDuration: 150,
};

export default function App() {
  return (
    <OrdersProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash_screen} />
          <Stack.Screen name="Welcome" component={Welcome_screen} />
          <Stack.Screen name="Login" component={Login_screen} />
          <Stack.Screen name="SignUp" component={SignUp_screen} />
          <Stack.Screen name="Dashboard" component={Dashboard_screen} options={tabScreenOptions} />
          <Stack.Screen name="Shop" component={Shop_screen} options={tabScreenOptions} />
          <Stack.Screen name="Notification" component={Notification_screen} options={tabScreenOptions} />
          <Stack.Screen name="Profile" component={Profile_screen} options={tabScreenOptions} />
          <Stack.Screen name="ItemDetails" component={Item_details_screen} />
          <Stack.Screen name="Customization" component={Customization_screen} />
          <Stack.Screen name="Reservation" component={Reservation_screen} />
          <Stack.Screen name="OrderStatus" component={Order_status_screen} options={tabScreenOptions} />
          <Stack.Screen name="AdminDashboard" component={Admin_dashboard_screen} options={tabScreenOptions} />
          <Stack.Screen name="AdminProducts" component={Admin_products_screen} options={tabScreenOptions} />
          <Stack.Screen name="AdminOrders" component={Admin_orders_screen} options={tabScreenOptions} />
          <Stack.Screen name="AdminOrderDetails" component={Admin_order_details_screen} />
          <Stack.Screen name="AdminReports" component={Admin_reports_screen} options={tabScreenOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </OrdersProvider>
  );
}