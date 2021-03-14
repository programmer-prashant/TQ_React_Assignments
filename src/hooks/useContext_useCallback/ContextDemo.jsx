// 2. Create a context and provide a value
// Provide the object as provider value
// Consume in the nested component using useContext
// 7.Create two context and provide a value ‘web_developer’ and
// ‘react’repectively
// 10. WAP to show use of UseContext hook for sharing a theme (e.g. color,
// paddings, margins, font-sizes) across our React components but keeping it
// simple, the theme will only be a color (e.g. green)

import React from 'react';

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
