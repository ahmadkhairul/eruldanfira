import { motion } from "framer-motion";

const Component = (props) => {
  const { children, className } = props;

  return (
    <motion.div
      initial={{ y: "100px", opacity: 0 }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 1 }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "100px", opacity: 0 }
      }}
      className={className}
      style={{ overflow: "none" }}
    >
      {children}
    </motion.div>
  );
};

export default Component;
