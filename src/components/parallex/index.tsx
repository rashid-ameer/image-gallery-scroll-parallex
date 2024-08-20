"use client";
import styles from "@/components/parallex/style.module.scss";
import useDimension from "@/hooks/use-dimension";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion,
  useVelocity,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

function ScrollParallex() {
  const { height } = useDimension();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.6]);
  const v = useVelocity(y2);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <div
      ref={ref}
      className={styles.gallery}>
      <div className={styles.wrapper}>
        <Column
          images={[images[0], images[1], images[2]]}
          y={y1}
        />
        <Column
          images={[images[3], images[4], images[5]]}
          y={y2}
        />
        <Column
          images={[images[6], images[7], images[8]]}
          y={y3}
        />
        <Column
          images={[images[9], images[10], images[11]]}
          y={y4}
        />
      </div>
    </div>
  );
}

export default ScrollParallex;

type ColumnProps = {
  images: string[];
  y?: MotionValue<number>;
};

function Column({ images, y }: ColumnProps) {
  return (
    <motion.div
      className={styles.column}
      style={{ y }}>
      {images.map((image, index) => (
        <div
          key={image}
          className={styles.imageContainer}>
          <Image
            src={`/images/${image}`}
            alt="image"
            fill
            sizes="25vw"
          />
        </div>
      ))}
    </motion.div>
  );
}
