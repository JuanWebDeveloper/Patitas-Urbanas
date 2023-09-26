import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { StoreState, ActionState } from '@/src/core/store/store';

export const useSelectorState: TypedUseSelectorHook<StoreState> = useSelector;
export const useDispatchState = () => useDispatch<ActionState>();
