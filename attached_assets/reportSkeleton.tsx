import { Card} from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import { motion } from "framer-motion";

interface ProfileSkeletonProps {
  index: number;
}

const ProfileSkeleton = ({ index }: ProfileSkeletonProps) => {
  return (
    <motion.div
      initial={{ visibility: "hidden" }}
      whileInView={{ visibility: "visible" }}
      className="animate__animated animate__jackInTheBox"
      style={{ animationDelay: `${index * 0.01}s` }}
    >
      <Card className="w-[200px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300" />
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300" />
          </Skeleton>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProfileSkeleton;