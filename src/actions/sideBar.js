import { createAction } from 'redux-actions';

export const SHOW_SIDE_BAR = 'SHOW_SIDE_BAR';
export const HIDE_SIDE_BAR = 'HIDE_SIDE_BAR';

export const showSideBar = createAction(SHOW_SIDE_BAR);
export const hideSideBar = createAction(HIDE_SIDE_BAR);
