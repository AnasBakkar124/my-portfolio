"use client"

import React, { createContext, useContext, useState, } from 'react';

const TranslationContext = createContext('');

export const useTranslation = () => useContext(TranslationContext);



export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    // console.log(language,'333')
    // console.log
    (children,'children')
    return (
        <TranslationContext.Provider value={{ language, setLanguage }}>
            {children}
        </TranslationContext.Provider>
    );
};

