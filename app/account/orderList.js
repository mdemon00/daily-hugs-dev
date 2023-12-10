"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";

const OrderList = ({ orders }) => {
  // Check if orders is not an array
  if (!Array.isArray(orders) || orders.length === 0) {
    // You can handle this case based on your requirements
    return <div>No orders available.</div>;
  }

  return (
    <Accordion allowToggle>
      {orders.map((order, index) => (
        <AccordionItem key={order._id}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontSize="lg" fontWeight="bold">
                Order #{index + 1}
              </Text>
            </Box>
            <Box flex="1" textAlign="right">
              <Text fontSize="lg" fontWeight="bold">
                Total: €{order.grandTotal.toFixed(2)}
              </Text>
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Text fontSize="lg" fontWeight="bold">
                Order ID: {order._id}
              </Text>
              <Text>
                Date: {new Date(order.createdAt).toLocaleDateString()}
              </Text>
              <Divider my={2} />
              <Text fontSize="lg" fontWeight="bold">
                Shipping Information
              </Text>
              <Text>{order.billingAddress.name}</Text>
              <Text>{order.billingAddress.email}</Text>
              <Text>{order.billingAddress.postCode}</Text>
              <Text>{order.billingAddress.district}</Text>
              <Divider my={2} />
              <Text fontSize="lg" fontWeight="bold">
                Order Details
              </Text>
              {order.items.map((item) => (
                <Box key={item._id} mb={2}>
                  <Text>{item.name}</Text>
                  <Text>
                    {item.qty} x €{item.price}
                  </Text>
                </Box>
              ))}
              <Divider my={2} />
              <Text fontSize="lg" fontWeight="bold">
                Total: €{order.grandTotal.toFixed(2)}
              </Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default OrderList;
