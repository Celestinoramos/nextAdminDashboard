
'use client'

import { useEffect, useState } from 'react';
import styles from '../../ui/dashboard/reports/reports.module.css';
import Image from 'next/image';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch('https://api-mapp-zzz.vercel.app/reports');
        const data = await res.json();
        setReports(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {reports.map((report, index) => (
          <div key={report.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={report.image || '/noproduct.jpg'}
                alt={report.title}
                width={200}
                height={200}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{report.title}</h3>
              <p className={styles.location}>{report.locationName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
