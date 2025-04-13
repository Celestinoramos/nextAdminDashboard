'use client'

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from 'next/image';
import styles from '../../ui/dashboard/reports/reports.module.css';
import { Spinner } from "@nextui-org/react";
import { motion } from "framer-motion";


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
        <Spinner size="lg" label="Carregando..." />
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <div className="p-4 m-4 border border-primary rounded-lg text-center">
        <h3 className="text-xl font-bold">SEM RESULTADO</h3>
        <p className="text-gray-400">Não foram encontrados relatórios</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>Zonas Reportadas</h1>
      </div>
      <div className={styles.grid}>
        {reports.map((report) => (
          <motion.div
            key={report.id}
            initial={{ visibility: "hidden" }}
            whileInView={{ visibility: "visible" }}
            className="animate__animated animate__jackInTheBox"
            style={{ animationDelay: `${reports.indexOf(report) * 0.01}s` }}
          >
            <Card key={report.id} className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <div className={styles.imageContainer}>
                  <Image
                    src={report.image || '/noproduct.jpg'}
                    alt={report.title}
                    width={300}
                    height={200}
                    className={styles.image}
                  />
                </div>
              </CardHeader>
              <CardBody className={styles.cardBody}>
                <h3 className={styles.reportTitle}>{report.title}</h3>
                <p className={styles.description}>{report.description}</p>
                <p className={styles.location}>{report.locationName || report.location}</p>
                <div className={styles.reportMeta}>
                  <span className={`${styles.severity} ${styles[report.severity.toLowerCase() || 'medio']}`}>
                    {report.severity || 'Médio'}
                  </span>
                  <span className={styles.date}>{report.date}</span>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;