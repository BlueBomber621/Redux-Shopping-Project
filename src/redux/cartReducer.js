import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store"
import {
    persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const stripe = require('stripe')('sk_test_51QiHgNAQivp40Ulah3YUMjpyQmNGHxjgohWAieA4QvCzzJwe0vcaFAbyNrjtUVtNO2GCTKgcF7cle3lz347XNkYP00rNp0JPUS')

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {cart:persistedReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistorStore = persistStore(store)