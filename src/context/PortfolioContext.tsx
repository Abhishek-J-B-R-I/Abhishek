'use client';

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { fallbackPortfolioData } from '@/lib/content/fallbackData';
import { loadPortfolioData } from '@/lib/content/sheetAdapter';
import { PortfolioData } from '@/lib/content/types';

interface PortfolioContextType {
  data: PortfolioData;
  isSyncing: boolean;
  refresh: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextType>({
  data: fallbackPortfolioData,
  isSyncing: false,
  refresh: async () => {},
});

export function PortfolioProvider({
  children,
  initialData = fallbackPortfolioData,
}: {
  children: React.ReactNode;
  initialData?: PortfolioData;
}) {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [isSyncing, startTransition] = useTransition();

  const refresh = async () => {
    startTransition(async () => {
      try {
        const fresh = await loadPortfolioData();
        setData(fresh);
      } catch (err) {
        console.error('Failed refreshing portfolio data:', err);
      }
    });
  };

  useEffect(() => {
    // Only attempt client-side revalidation if live Google Sheets is configured
    refresh();
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, isSyncing, refresh }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
