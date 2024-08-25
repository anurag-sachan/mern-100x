export interface ReportWebVitalsCallback {
  (metric: { id: string; name: string; value: number; label?: string }): void;
}

const reportWebVitals = (onPerfEntry?: ReportWebVitalsCallback) => {
// const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
