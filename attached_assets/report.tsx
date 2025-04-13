
import { Card, CardBody, CardFooter } from "@heroui/card"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion";
import { Ireport } from "@/models/Ireport";
import { Image } from "@heroui/image";
interface ReportsProps {
    index: number,
    report: Ireport
}
const Report = ({ report, index }: ReportsProps) => {
    const router = useRouter()
    const handle_details = () => {
        // router.push(`/report/${report.id}`)
    }
    return (
        <motion.div
            initial={{ visibility: "hidden" }}
            whileInView={{ visibility: "visible" }}
            // viewport={{ once: true }}
            className="animate__animated animate__jackInTheBox"
            style={{ animationDelay: `${index * 0.01}s` }} 
        >
            <Card
                isPressable
                shadow="sm"
                onPress={handle_details}
                className="hover:bg-zinc-900 w-full"
            >
                <CardBody className="overflow-visible p-0">
                   <Image isBlurred isZoomed src={report.image} className="h-64 w-full object-cover" width={300}/>
                </CardBody>
                <CardFooter className="text-small flex flex-col gap-4 justify-between">
                    <b>{report.title}</b>
                    <p className="text-default-500">{report.locationName}</p>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
export default Report