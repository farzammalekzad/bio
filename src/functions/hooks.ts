import React from 'react';
import {useState} from "react";

export const Hook: any = (key: any, birthDate: any) => {
    const initialValue = localStorage.getItem(key) ?? birthDate;
    const [value, setValue] = useState(initialValue);
    const setAndStoreValue = (newValue: any) => {
       setValue(newValue);
       localStorage.setItem(key, newValue);
    }
    return [value, setAndStoreValue];
}
