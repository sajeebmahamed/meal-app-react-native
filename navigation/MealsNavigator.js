import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoryScreen,
    CategoryMeals: {
        screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
});
export default createAppContainer(MealsNavigator);
