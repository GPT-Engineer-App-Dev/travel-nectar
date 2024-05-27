import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Select, HStack } from "@chakra-ui/react";
import { useState } from "react";

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    // Implement search logic here
    console.log("Searching flights", { departureCity, destinationCity, departureDate, returnDate, passengers });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>Search Flights</Heading>
        <FormControl id="departure-city" isRequired>
          <FormLabel>Departure City</FormLabel>
          <Input value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} placeholder="Enter departure city" />
        </FormControl>
        <FormControl id="destination-city" isRequired>
          <FormLabel>Destination City</FormLabel>
          <Input value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)} placeholder="Enter destination city" />
        </FormControl>
        <HStack width="100%">
          <FormControl id="departure-date" isRequired>
            <FormLabel>Departure Date</FormLabel>
            <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
          </FormControl>
          <FormControl id="return-date">
            <FormLabel>Return Date</FormLabel>
            <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </FormControl>
        </HStack>
        <FormControl id="passengers" isRequired>
          <FormLabel>Number of Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>Search Flights</Button>
      </VStack>
    </Container>
  );
};

export default FlightSearch;