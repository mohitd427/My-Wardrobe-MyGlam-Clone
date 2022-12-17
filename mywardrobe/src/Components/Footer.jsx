import {
    Image,
    Box,
    Button,
    HStack,
    Input,
    SimpleGrid,
    Text,
    VStack,
    Divider,
  } from "@chakra-ui/react";
  import React from "react";
  
  function Footer() {
    return (
      <Box
        w="100%"
        py="30px"
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      >
        <Box m="auto" w={{ md: "100%", lg: "95%" }} mb={"30px"}>
          <SimpleGrid justifyContent={"space-between"} columns="10" gap={"10px"}>
            <Box display={"flex"} flexDirection="column" gap="5px">
              <Text fontFamily="sans-serif" fontSize="14px" color=" darkgray">
                LIPS
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Lipstic
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Crayon Lipstick
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Matte Lipstick
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Lip Gloss
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Hi-Shine Lipgloss
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Lip Liner
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Lip Balm
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Glitter
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Lip Stain
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Lipstick Set
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Lip Kit
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Find Your Lipstic
              </Text>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="5px">
              <Text fontFamily="sans-serif" fontSize="14px" color=" gray">
                FACE
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Face Sets
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Fixing Powder
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Primer
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Concealer
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Foundation
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Compact
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Banana Powder
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Highlighter
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Blush
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Bronzer
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Sindoor
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Makeup Brushes
              </Text>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="5px">
              <Text fontFamily="sans-serif" fontSize="14px" color=" gray">
                EYE
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Eye Shadow
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Eyeliner
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Eyebrows
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Glitter
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Lip Gloss
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Mascara
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Kajal
              </Text>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="5px">
              <Text fontFamily="sans-serif" fontSize="14px" color=" gray">
                NAILS
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Nail Polish
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Matte Nail Polish
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Nail Lacquer
              </Text>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="5px">
              <Text fontFamily="sans-serif" fontSize="14px" color=" gray">
                SKINCARE
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Moisturiser
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Night Cream
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Eye Cream
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Body lotion
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Serum
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Sunscreen
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Skincare Kits
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Cleansing Products
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Exfoliator & Scrub
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Face Wash
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Mask
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                face Pack
              </Text>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="5px">
              <Text fontFamily="sans-serif" fontSize="14px" color=" gray">
                SANITIZEING CARE
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Sanitizing Kits
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Sanitizing Soray
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Sanitizing Wipes
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Hand Sanitizer
              </Text>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="5px">
              <Text fontFamily="sans-serif" fontSize="14px" color=" gray">
                KITS AND COMBOS
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Makeup Kits
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Bridal makeup Kits
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Makeup Combo
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Makeup Gift Sets
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Cosmetics Kits & Combos
              </Text>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="5px">
              <Text fontFamily="sans-serif" fontSize="14px" color=" gray">
                HAIR CARE
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Shampoo
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Conditioner
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Hair Oil
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Serum
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Hair Mask
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Combos
              </Text>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="5px">
              <Text fontFamily="sans-serif" fontSize="14px" color=" gray">
                MYGLAMMSTUDIO
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Style
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Lifestyle
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Trends
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Tips
              </Text>
  
              <Text fontFamily="sans-serif" fontSize="14px">
                Beauty Tutorials
              </Text>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="5px">
              <Text
                fontFamily="sans-serif"
                fontSize="14px"
                color=" gray"
                fontWeight="light bold"
              >
                KNOW MORE
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                About Us
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Exclusive Offers
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Refer & Earn
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                myglammPARTIES
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Store Locator
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Press & Media
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Terms & Conditions
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Privacy Policy
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Shipping and Delivery policy
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Returns and Replacements
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Loyalty Program PolicySitemap
              </Text>
              <Text fontFamily="sans-serif" fontSize="14px">
                Responsible Disclosure Policy
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box
          m="auto"
          w={{ md: "100%", lg: "90%" }}
          display={"grid"}
          gridTemplateColumns={"70% 30%"}
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize={"md"}>SUBSCRIBE FOR MYGLAMM EMAILS</Text>
            <HStack gap={"20px"}>
              <HStack
                flexDirection={{ md: "column", lg: "row" }}
                gap={{ md: "10px" }}
              >
                <Input
                  type={"text"}
                  borderRadius="none"
                  borderColor={"black"}
                  fontSize="md"
                />
                <Button w="200px" borderRadius="none" bg="black" color={"white"}>
                  SubScribe Now
                </Button>
              </HStack>
              <HStack>
                <Text fontSize={{ md: "2xm", lg: "sm" }}>STAY CONNECTED</Text>
                <Image
                  src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg&ga=GA1.2.2060609910.1656513868"
                  w="20px"
                  h="20px"
                />
                <Image
                  src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
                  w="20px"
                  h="20px"
                />
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqUvvlM0LGtMTJyQE9_tjXtUhukCQhUs6pHGSTZjWsOE1FdRS&s"
                  w="20px"
                  h="20px"
                />
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbfSAq8BUS714VwoZuj1RSSEHeyP2hq739y23E0JGk6ZiR6k&s"
                  w="25px"
                  h="20px"
                />
              </HStack>
            </HStack>
          </Box>
          <Box textAlign={"center"}>
            <Text fontSize={"md"}>EXPERIENCE THE MYGLAMM MOBILE APP</Text>
            <HStack justifyContent={"space-between"}>
              <Image
                src="https://files.myglamm.com/site-images/original/iosStore.png"
                w="45%"
                //   h="50px"
              />
              <Image
                src="https://files.myglamm.com/site-images/original/playStore.png"
                w="45%"
                //   h="50px"
              />
            </HStack>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export function MainFooterMob() {
    return (
      <Box
        w="100%"
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
        bg="black"
        color={"white"}
        py="30px"
        mt='2rem'
      >
        <VStack gap={"10px"} w="90%" m="auto" mb="40px">
          <Box textAlign={"left"} w="100%">
            <Text as={"b"}>LIPS</Text>
            <Text fontSize={"md"}>
              Lipstic / Crayon Lipstick / Matte Lipstick / Lip Gloss / Hi-Shine /
              Lipgloss / Lip Liner / Lip Balm / Glitter / Lip Stain / Lipstick Set
              / Lip Kit / Find Your Lipstic
            </Text>
          </Box>
          <Box textAlign={"left"} w="100%">
            <Text as={"b"}>FACE</Text>
            <Text fontSize={"md"}>
              Face Sets / Fixing Powder / Primer / Concealer / Foundation /
              Compact / Banana Powder / Highlighter / Blush / Bronzer / Sindoor /
              Makeup Brushes
            </Text>
          </Box>
          <Box textAlign={"left"} w="100%">
            <Text as={"b"}>EYES</Text>
            <Text fontSize={"md"}>
              Eye Shadow / Eyeliner / Eyebrows / Glitter / Lip Gloss / Mascara /
              Kajal
            </Text>
          </Box>
          <Box textAlign={"left"} w="100%">
            <Text as={"b"}>NAILS</Text>
            <Text fontSize={"md"}>
              Nail Polish / Matte Nail Polish / Nail Lacquer
            </Text>
          </Box>
          <Box textAlign={"left"} w="100%">
            <Text as={"b"}>SKINCARE</Text>
            <Text fontSize={"md"}>
              Moisturiser / Night Cream / Eye Cream / Body lotion / Serum /
              Sunscreen / Skincare Kits / Cleansing Products / Exfoliator & Scrub
              / Face Wash / Mask / Face Pack
            </Text>
          </Box>
          <Box textAlign={"left"} w="100%">
            <Text as={"b"}>SANITIZEING CARE</Text>
            <Text fontSize={"md"}>
              Sanitizing Kits / Sanitizing Soray / Sanitizing Wipes / Hand
              Sanitizer
            </Text>
          </Box>
          <Box textAlign={"left"} w="100%">
            <Text as={"b"}>KITS AND COMBOS</Text>
            <Text fontSize={"md"}>
              Makeup Kits / Bridal makeup Kits / Makeup Combo / Makeup Gift Sets /
              Cosmetics Kits & Combo
            </Text>
          </Box>
          <Box textAlign={"left"} w="100%">
            <Text as={"b"}>HAIR CARE</Text>
            <Text fontSize={"md"}>
              Shampoo / Conditioner / Hair Oil / Serum / Hair Mask / Combos
            </Text>
          </Box>
          <Box textAlign={"left"} w="100%">
            <Text as={"b"}>MYGLAMMSTUDIO</Text>
            <Text fontSize={"md"}>
              Style / Lifestyle / Trends / Tips / Beauty Tutorials
            </Text>
          </Box>
          <Box textAlign={"left"} w="100%">
            <Text as={"b"}>KNOW MORE</Text>
            <Text fontSize={"md"}>
              About Us / Exclusive Offers / Refer & Earn / myglammPARTIES / Store
              Locator / Press & Media / Terms & Conditions / Privacy Policy /
              Shipping and Delivery policy / Returns and Replacements / Loyalty
              Program PolicySitemap / Responsible Disclosure Policy
            </Text>
          </Box>
        </VStack>
        <HStack w="90%" m="auto" justifyContent={"space-between"} mb="40px">
          <Image
            src="https://i.pinimg.com/236x/9c/fd/c7/9cfdc754454f1b771f988d577488049c.jpg"
            w="40px"
            h="40px"
            borderRadius={"15px"}
          />
          <Image
            src="https://i.pinimg.com/236x/18/62/54/1862545290c37456f7fc801002c17893.jpg"
            w="40px"
            h="40px"
            borderRadius={"15px"}
          />
          <Image
            src="https://i.pinimg.com/236x/ff/66/13/ff66139ecdd1c68918c38c746a4465d6.jpg"
            w="40px"
            h="40px"
            borderRadius={"15px"}
          />
          <Image
            src="https://i.pinimg.com/236x/af/f8/b7/aff8b7fc9b281f1a56a619955c285730.jpg"
            w="40px"
            h="40px"
            borderRadius={"15px"}
          />
        </HStack>
        <VStack w="80%" m={"auto"} mb="40px">
          <Text as={"b"} fontSize="md">
            DOWUNLOAD MYGLAMM APP NOW
          </Text>
          <HStack justifyContent={"space-between"}>
            <Image
              src="https://files.myglamm.com/site-images/original/iosStore.png"
              h="40px"
              w={"45%"}
            />
            <Image
              src="https://files.myglamm.com/site-images/original/playStore.png"
              h="40px"
              w={"45%"}
            />
          </HStack>
        </VStack>
        <HStack w="90%" m="auto" justifyContent={"space-between"} mb="40px">
          <VStack>
            <Image
              src="https://i.pinimg.com/236x/28/0b/83/280b8304d737d6280fe617c1e3ba6be4.jpg"
              h="80px"
              w={"80px"}
            />
            <Text>Cruelty Free</Text>
          </VStack>
          <VStack>
            <Image
              src="https://surfsideremovals.com.au/wp-content/uploads/2021/06/surfside-storage-pantech.png"
              h="80px"
              w={"80px"}
            />
            <Text>Free Shipping </Text>
          </VStack>
          <VStack>
            <Image
              src="https://torontofloralboutique.com.au/wp-content/uploads/2018/04/gifts2.png"
              h="80px"
              w={"80px"}
            />
            <Text>Gift with Purchase</Text>
          </VStack>
        </HStack>
        <Divider orientation="horizontal" w="90%" m="auto" mb="20px" />
        <Box w="100%" textAlign={"center"}>
          <Text color={"#e5e7eb"}>© Copyright myglamm 2022</Text>
        </Box>
      </Box>
    );
  }
  export {Footer}