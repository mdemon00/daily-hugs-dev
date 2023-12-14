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
} from "@chakra-ui/react";

const SubscriptionPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Add your logic for handling the submitted email here
    console.log("Submitted email:", email);
    // Close the modal after submission
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Subscribe to Our Newsletter</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={4}
          />
          <Button colorScheme="teal" onClick={handleSubmit}>
            Subscribe
          </Button>
        </ModalBody>
        <ModalFooter>
          {/* You can add additional content or controls here */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SubscriptionPopup;
