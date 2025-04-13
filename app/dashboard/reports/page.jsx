
'use client'

import { useState, useEffect } from 'react';
import { Card } from "@heroui/card";
import { CircularProgress } from "@heroui/progress";
import { Alert } from "@heroui/alert";
import { motion } from "framer-motion";
import Image from 'next/image';
import styles from '../../ui/dashboard/reports/reports.module.css';

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
      <div className="flex justify-center items-center h-[80vh]">
        <CircularProgress className="animate__animated animate__zoomInDown" label="Loading..." />
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <Alert 
        className="animate__animated animate__fadeInDown" 
        description="Não foram encontrados relatórios"
        variant="bordered" 
        color="primary" 
        title="SEM RESULTADO" 
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ visibility: "hidden" }}
            whileInView={{ visibility: "visible" }}
            className="animate__animated animate__jackInTheBox"
            style={{ animationDelay: `${index * 0.01}s` }}
          >
            <Card className="hover:bg-zinc-900 w-full">
              <div className={styles.imageContainer}>
                <Image
                  src={report.image || '/noproduct.jpg'}
                  alt={report.title}
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{report.title}</h3>
                <p className={styles.location}>{report.locationName}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
