import { Spinner } from "@chakra-ui/react";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <Spinner size="xl" color="teal.500" />
    </div>
  );
};

export default Loader;
