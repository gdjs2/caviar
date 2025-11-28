import { motion } from "framer-motion";

export default function Header({ title }) {
  return (
    <motion.h1
      className="header"
      initial={{ opacity: 0, y: -20 }}     // 初始状态
      animate={{ opacity: 1, y: 0 }}       // 动画结束状态
      transition={{ duration: 0.6, ease: "easeOut" }} // 动画参数
    >
      {title}
    </motion.h1>
  );
}