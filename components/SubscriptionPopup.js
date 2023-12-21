import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

const SubscriptionPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [couponCode, setCouponCode] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const generateCouponCode = () => {
    // Simple function to generate a random coupon code
    // const code = Math.random().toString(36).substring(7).toUpperCase();
    const code = "BLOOM10OFF";
    return code;
  };

  const validateEmail = (value) => {
    // Basic email validation using a regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSubmit = async () => {
    console.log("called");
    // Validate email before submission
    const isValid = validateEmail(email);
    setIsValidEmail(isValid);

    if (isValid) {
      // Add your logic for handling the submitted email here
      console.log("Submitted email:", email);

      // Generate a coupon code
      const code = generateCouponCode();
      setCouponCode(code);

      try {
        // Add your logic for handling the submitted email here
        console.log("Submitted email:", email);

        // Send email to the API
        const response = await fetch(
          "https://hook.eu2.make.com/wjlzjcj7nkgaip7m3vsoplb5d6ew3iyv",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ subscriptionPopup: email }),
          }
        );

        if (response.ok) {
          console.log("Email sent successfully");
        } else {
          console.error("Failed to send email");
        }

        // Generate a coupon code
        const code = generateCouponCode();
        setCouponCode(code);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
    // Close the modal after submission
    // onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            10% Discount on Subscribe
          </Text>
          Subscribe to Our Newsletter
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!isValidEmail}
            errorBorderColor="red.500"
            mb={4}
          />
          <Button colorScheme="teal" onClick={handleSubmit}>
            Subscribe
          </Button>
          {!isValidEmail && (
            <Text mt={2} color="red.500" fontSize="sm">
              Please enter a valid email address.
            </Text>
          )}
          {couponCode && (
            <Text mt={4} color="green.500" fontWeight="bold">
              Your 10% discount coupon code: {couponCode}
            </Text>
          )}
        </ModalBody>
        <ModalFooter>
          {/* You can add additional content or controls here */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SubscriptionPopup;
