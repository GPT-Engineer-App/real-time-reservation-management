import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Text, Textarea, useToast, VStack } from "@chakra-ui/react";
import { FaCheck, FaPaperPlane, FaUserTie } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast({
      title: "Request submitted.",
      description: "We've received your cleaning service request.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6}>
        Cleaning Service Booking
      </Heading>

      <Stack spacing={8} as="form" onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor="customer-name">Customer Name</FormLabel>
          <Input id="customer-name" placeholder="Enter your name" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="service-type">Service Type</FormLabel>
          <Select id="service-type" placeholder="Select service type">
            <option>Standard Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move Out/Move In Cleaning</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="details">Details</FormLabel>
          <Textarea id="details" placeholder="Describe your cleaning needs" />
        </FormControl>

        <Button leftIcon={<FaPaperPlane />} colorScheme="blue" type="submit">
          Submit Request
        </Button>
      </Stack>

      <VStack spacing={4} mt={10}>
        <Heading as="h2" size="lg">
          Why Choose Us?
        </Heading>
        <Text>We provide real-time quotes and direct messaging with managers.</Text>
        <Text>Secure 10% deposit to confirm your service.</Text>
        <Text>AI-based recommendation for optimal pricing.</Text>
        <Flex align="center">
          <FaUserTie />
          <Text ml={2}>Professional and competitive service providers.</Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
