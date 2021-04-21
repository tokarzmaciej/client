import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Center,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  SearchIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import { getAllCitizens, getCitizen } from "../../requests/citizensList";
import {
  Link,
} from "react-router-dom";

// DANE TESTOWE
const c = {
  citizens: [
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
    { name: "Marek", lastName: "Kowalski", pesel: "12345678900" },
  ],
  size: 25,
};
//

const pageSize = 25;

const CitizensList = () => {
  const [isPreviousDisabled, isPreviousDisabledUpd] = useState(true);
  const [isNextDisabled, isNextDisabledUpd] = useState(false);
  const [currentPage, currentPageUpd] = useState(1);
  const [search, searchUpd] = useState("");
  const [citizens, citizensUpd] = useState({citizens: [], size: 0});

  const getCit = async () => {
    // !!! DODAJ KOMENTARZ ŻEBY POBIERAĆ DANE Z API !!!
    const data =  c;
    //

    // !!! USUŃ KOMENTARZ ŻEBY POBIERAĆ DANE Z API !!!
    // const data =  await getAllCitizens(currentPage, pageSize);
    //

    if(data !== 'Nie znaleziono obywateli'){
      citizensUpd(data);
    }else{
      citizensUpd({citizens: [], size: 0});
    }

    console.log(citizens);
  }

  useEffect(() => {
    if (
      (currentPage === 1 &&
      currentPage >= Math.ceil(citizens.size / pageSize)) || citizens.citizens.length === 0
    ) {
      isPreviousDisabledUpd(true);
      isNextDisabledUpd(true);
    } else if (currentPage === 1) {
      isPreviousDisabledUpd(true);
      isNextDisabledUpd(false);
    } else if (currentPage >= Math.ceil(citizens.size / pageSize)) {
      isNextDisabledUpd(true);
      isPreviousDisabledUpd(false);
    } else {
      isNextDisabledUpd(false);
      isPreviousDisabledUpd(false);
    }

    getCit();
  }, [currentPage, isPreviousDisabled]);

  useEffect(() => {
    if(search.toString().length === 11){
      
    }
  }, [search]);

  const goToPreviousPage = () => {
    currentPageUpd(parseInt(currentPage) - 1);
  };

  const goToFirstPage = () => {
    currentPageUpd(1);
  };

  const goToNextPage = () => {
    currentPageUpd(parseInt(currentPage) + 1);
  };

  const goToLastPage = () => {
    currentPageUpd(Math.ceil(citizens.size / pageSize));
  };

  return (
    <Center
      width="100%"
      bg="gray.100"
      minH="100vh"
      maxH="100vh"
      d="flex"
      flexDir="column"
    >
      <Center
        width={{md: "80%", base: "94%"}}
        minH="73vh"
        maxH="73vh"
        display="flex"
        flexDir="column"
        boxShadow="xl"
        borderWidth="1px"
        borderRadius="lg"
        d="flex"
        flexDirection="column"
        justifyContent="space-between"
        bg="white"
        zIndex="1"
      >
        <Box
          boxShadow="md"
          textAlign="center"
          padding="4"
          bg="teal"
          borderTopRadius="lg"
          width="100%"
        >
          <Box
            fontWeight="semibold"
            letterSpacing="wide"
            textTransform="uppercase"
            fontSize="1.1em"
            textAlign="center"
          >
            <Box d="flex" flexDir={{sm: "row", base: "column"}} justifyContent="space-between">
              <Box width="180px" display={{sm: "none", md: "block", base: "none"}}></Box>
              <Center color="white">Lista Obywateli</Center>
              <InputGroup width={{sm: "180px", base: "none"}} marginTop={{sm: "0", base: "10px"}}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input
                  value={search}
                  type="tel"
                  placeholder="PESEL"
                  bg="white"
                  textAlign="center"
                  maxLength="11"
                  onChange={(e) => {
                    if (isNaN(parseInt(e.target.value))) {
                      searchUpd("");
                    } else {
                      searchUpd(parseInt(e.target.value));
                    }
                  }}
                />
                <InputRightElement children={<CheckIcon color={(search.toString().length === 11 && citizens.citizens.length === 1) ? "green.400" : "gray.300"} />} />
              </InputGroup>
            </Box>
          </Box>
        </Box>
        <Box
          overflowY="auto"
          width="100%"
          padding={{ base: "0 5%", lg: "0 10%" }}
          height="80vh"
        >
          {(citizens.citizens.length > 0) ?
          citizens.citizens.map((item, i) => {
            return (
              <Link to={`/admin/citizens/${item.pesel}`}>
              <Grid
                key={i}
                templateColumns="repeat(3, 1fr)"
                textAlign="center"
                width="100%"
                borderRadius="5px"
                fontSize={{md: "1.3em", base: "1em"}}
                padding="8px 0"
                margin="0.7em 0"
                bg="gray.100"
                boxShadow="md"
                transition="box-shadow 0.2s, background-color 0.05s"
                cursor="pointer"
                _hover={{
                  boxShadow: "lg",
                }}
                _active={{
                  bg: "gray.200"
                }}
                d='flex'
                justifyContent='space-around'
                flexDir="row"
                flexWrap="wrap"
                onClick={(e) => {
                  
                }}
              >
                <Box d="flex" flexDir="row" padding={{base: "0 10px", sm: "0"}}>
                  <Box
                    fontSize={{md: "0.6em", sm: "0.5em", base: "0.6em"}}
                    fontWeight="bold"
                    color="gray.400"
                    lineHeight="3em"
                  >
                    PESEL&nbsp;
                  </Box>
                  <Box>{item.pesel}</Box>
                </Box>
                <Box
                  d="flex"
                  flexDir="row"
                  padding={{base: "0 10px", sm: "0"}}
                >
                  <Box
                    fontSize={{md: "0.6em", sm: "0.5em", base: "0.6em"}}
                    fontWeight="bold"
                    color="gray.400"
                    lineHeight="3em"
                  >
                    IMIĘ&nbsp;
                  </Box>
                  <Box>{item.name}</Box>
                </Box>
                <Box d="flex" flexDir="row" padding={{base: "0 10px", sm: "0"}}>
                  <Box
                    fontSize={{md: "0.6em", sm: "0.5em", base: "0.6em"}}
                    fontWeight="bold"
                    color="gray.400"
                    lineHeight={{md: "3em", base: "3em"}}
                  >
                    NAZWISKO&nbsp;
                  </Box>
                  <Box>{item.lastName}</Box>
                </Box>
              </Grid>
              </Link>
            );
          })
        :
          <Center height="100%" fontSize='2em' color='gray.300' fontWeight="bold">
            Nie znaleziono obywateli
          </Center>}
        </Box>
      </Center>
      <Center paddingTop="2.5vh">
        <Grid d="flex" flexDir="row">
          <IconButton
            aria-label="Previous page"
            size="md"
            onClick={goToFirstPage}
            disabled={isPreviousDisabled}
            icon={<ArrowLeftIcon w={5} h={5} />}
            _focus={{
              borderShadow: "none",
            }}
          />
          <IconButton
            aria-label="Previous page"
            size="md"
            onClick={goToPreviousPage}
            disabled={isPreviousDisabled}
            icon={<ChevronLeftIcon w={10} h={10} />}
            _focus={{
              borderShadow: "none",
            }}
          />
          <Input
            value={currentPage}
            width="50px"
            bg="white"
            textAlign="center"
            fontSize="1.1em"
            boxShadow="md"
            padding="0"
            onChange={async (e) => {
              if (isNaN(parseInt(e.target.value))) {
                currentPageUpd("");
              } else {
                currentPageUpd(parseInt(e.target.value));
                // getCit();
              }
            }}
            onBlur={(e) => {
              if (isNaN(parseInt(e.target.value)) || e.target.value < 1) {
                currentPageUpd(1);
              } else if (
                e.target.value > Math.ceil(citizens.size / pageSize)
              ) {
                currentPageUpd(Math.ceil(citizens.size / pageSize));
              }
              console.log("REQUEST");
            }}
          />
          <IconButton
            aria-label="Previous page"
            size="md"
            onClick={goToNextPage}
            disabled={isNextDisabled}
            icon={<ChevronRightIcon w={10} h={10} />}
            _focus={{
              borderShadow: "none",
            }}
          />
          <IconButton
            aria-label="Previous page"
            size="md"
            onClick={goToLastPage}
            disabled={isNextDisabled}
            icon={<ArrowRightIcon w={5} h={5} />}
            _focus={{
              borderShadow: "none",
            }}
          />
        </Grid>
      </Center>
    </Center>
  );
};

export default CitizensList;
