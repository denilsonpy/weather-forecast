import React, { useContext, useState, createContext } from "react";

interface ILoadingContext {
  setLoading: Function;
  loading: boolean;
}

const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext);

const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ setLoading, loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

function useLoading(): ILoadingContext {
  const context = useContext(LoadingContext);

  return context;
}

export { LoadingProvider, useLoading };
