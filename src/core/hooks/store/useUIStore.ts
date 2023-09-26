import { useDispatchState } from './useStore';
import { onToggleTheme } from '@/src/core/store/features';

export const useUIStore = () => {
 const dispatch = useDispatchState();

 const toggleTheme = (themeEvent: boolean) => {
  dispatch(onToggleTheme(themeEvent));
 };

 return {
  toggleTheme,
 };
};
