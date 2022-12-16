import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {

  const imgURl = 'https://png.pngtree.com/png-clipart/20220626/original/pngtree-3d-cryptocurrency-gold-coin-symbol-free-vector-and-png-png-image_8187252.png'
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"91vh"}>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
      >
        Crypto Watcher
      </Text>
      <motion.div
        style={{
          height: "75vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={imgURl}
        />
      </motion.div>


    </Box>
  );
}

export default Home