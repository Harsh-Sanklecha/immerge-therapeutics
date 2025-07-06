import React, { createContext, useContext, useState, ReactNode } from 'react';


interface AppContextType {
  expertsData: {
    acf:{
      hero_title:string;
      hero_description:string;
    }
  }; 
  setExpertsData: (data: any) => void;
}


const initialContextState: AppContextType = {
  expertsData: {
    acf: {
      hero_title: '',
      hero_description: '',
    },
  },
  setExpertsData: () => {}, 
};


const AppContext = createContext<AppContextType>(initialContextState);


interface AppContextProviderProps {
  children: ReactNode; 
}


export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [expertsData, setExpertsData] = useState<AppContextType['expertsData']>(initialContextState.expertsData);

  return (
    <AppContext.Provider value={{ expertsData, setExpertsData }}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = (): AppContextType => useContext(AppContext);
