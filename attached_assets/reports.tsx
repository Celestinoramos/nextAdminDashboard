'use client'

import { Alert } from "@heroui/alert"
import { CircularProgress } from "@heroui/progress"
import { Icollaborators } from "@/models/Icollaborators"
import { Ireport } from "@/models/Ireport"
import Report from "./report"

interface ReportsProps {
    loading: boolean,
    reports: Ireport[]
}

const LoadingReports = (loading: boolean, reports: Ireport[]) => {

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <CircularProgress className="animate__animated animate__zoomInDown" label="Loading..." />
            </div>
        )
    } else {
        if (reports.length == 0)
            return (
                <Alert className="animate__animated animate__fadeInDown" description={"Não foi encontrado o perfil"} variant="bordered" color="primary" title={"SEM RESULTADO"} />
            )
        return (
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 mt-5">
                {
                    reports.map((report, index) => (
                        <Report key={index}  index={index} report={report} />
                    ))
                }
            </div>
        )
    }
}

const Reports = ({ reports, loading }: ReportsProps) => {
    return (
        <section className="w-full mt-44 px-4 relative">
            {LoadingReports(loading, reports)}
        </section>
    )
}
export default Reports