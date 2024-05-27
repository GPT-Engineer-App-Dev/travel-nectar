import { Container, VStack, Heading, Text, Button, Box } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { flightDetails } = location.state || {};

  if (!flightDetails) {
    return (
      <Container centerContent maxW="container.md" py={10}>
        <VStack spacing={4}>
          <Heading as="h1" size="xl" mb={6}>No Flight Selected</Heading>
          <Text>Please go back and select a flight.</Text>
          <Button colorScheme="teal" size="lg" mt={6} onClick={() => navigate('/flight-search')}>Back to Search</Button>
        </VStack>
      </Container>
    );
  }

  const handleConfirmBooking = () => {
    // Implement booking confirmation logic here
    console.log("Booking confirmed", flightDetails);
    navigate('/');
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>Confirm Your Booking</Heading>
        <Box p={4} borderWidth={1} borderRadius="md" width="100%">
          <Text fontSize="lg"><strong>Departure City:</strong> {flightDetails.departureCity}</Text>
          <Text fontSize="lg"><strong>Destination City:</strong> {flightDetails.destinationCity}</Text>
          <Text fontSize="lg"><strong>Departure Date:</strong> {flightDetails.departureDate}</Text>
          <Text fontSize="lg"><strong>Return Date:</strong> {flightDetails.returnDate}</Text>
          <Text fontSize="lg"><strong>Passengers:</strong> {flightDetails.passengers}</Text>
        </Box>
        <Button colorScheme="teal" size="lg" mt={6} onClick={handleConfirmBooking}>Confirm Booking</Button>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;