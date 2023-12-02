import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

const FooterAccordian = () => {
  return (
    <div className="mx-[10px]">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem borderColor={"#4035da1a"}>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="inter-700 text-14"
              >
                Daily Hugs
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="flex flex-col space-y-5 inter-400 text-14">
              <div>FAQ</div>
              <div>Contact us</div>
              <div>Deliveries</div>
              <div>Returns &amp; Exchanges</div>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderColor={"#4035da1a"}>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="inter-700 text-14"
              >
                Customer Service
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="flex flex-col space-y-5 inter-400 text-14">
              <div>FAQ</div>
              <div>Contact us</div>
              <div>Deliveries</div>
              <div>Returns &amp; Exchanges</div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FooterAccordian;
