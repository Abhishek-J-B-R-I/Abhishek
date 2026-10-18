'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { fallbackPortfolioData } from '@/lib/content/fallbackData';
import { loadPortfolioData } from '@/lib/content/sheetAdapter';
import { PortfolioData } from '@/lib/content/types';

interface PortfolioContextType {
  data: PortfolioData;
  isSyncing: boolean;
  lastSyncedAt: string | null;
  syncNotification: string | null;
  refresh: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextType>({
  data: fallbackPortfolioData,
  isSyncing: false,
  lastSyncedAt: null,
  syncNotification: null,
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
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [syncNotification, setSyncNotification] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setIsSyncing(true);
    setSyncNotification('Syncing with Google Sheets...');
    try {
      const fresh = await loadPortfolioData();
      setData(fresh);
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastSyncedAt(timeStr);
      const isLive = fresh.source === 'google_sheets';
      const msg = isLive
        ? `Live Sheet synced at ${timeStr} (Name: "${fresh.profile.name}")`
        : `Loaded fallback data at ${timeStr}`;
      setSyncNotification(msg);
      console.log('[PortfolioContext] Synced:', {
        source: fresh.source,
        name: fresh.profile.name,
        time: timeStr,
      });

      // Clear the temporary notification after 4 seconds
      setTimeout(() => setSyncNotification(null), 4000);
    } catch (err) {
      console.warn('[PortfolioContext] Failed refreshing portfolio data:', err);
      setSyncNotification('Failed to sync with Google Sheets');
      setTimeout(() => setSyncNotification(null), 4000);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <PortfolioContext.Provider value={{ data, isSyncing, lastSyncedAt, syncNotification, refresh }}>
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

