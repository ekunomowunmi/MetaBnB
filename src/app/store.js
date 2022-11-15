import { configureStore } from '@reduxjs/toolkit';

import modal from 'features/modal/modalSlice';

export const store = configureStore({
    reducer: {
        modal,
    },
});
