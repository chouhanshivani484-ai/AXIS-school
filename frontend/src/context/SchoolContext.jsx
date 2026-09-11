import { createContext, useContext, useMemo } from "react";

import {
  schoolInfo,
  stats,
  facilities,
  teachers,
  events,
  news,
  classes,
  faqs,
} from "../data/demoData";

const SchoolContext = createContext(null);

export function SchoolProvider({ children }) {
  const value = useMemo(
    () => ({
      schoolInfo,
      stats,
      facilities,
      teachers,
      events,
      news,
      classes,
      faqs,
    }),
    []
  );

  return (
    <SchoolContext.Provider value={value}>
      {children}
    </SchoolContext.Provider>
  );
}

export function useSchool() {
  const context = useContext(SchoolContext);

  if (!context) {
    throw new Error(
      "useSchool must be used inside SchoolProvider"
    );
  }

  return context;
}

export default SchoolContext;