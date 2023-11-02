import React, {useState, useEffect} from "react";
import {Typography, Container, CardMedia, Button, Box} from "@mui/material";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Product = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_PATH}/api/product`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.log("error", err); 
      });
  }, []);

  return (
    <>
      {product ? (
        <>
          <Container
            maxWidth="md"
            sx={{
              "& > span": {
                width: "100%",
                textAlign: "center",
              },
            }}
          >
            <Box
              component={LazyLoadImage}
              effect="blur"
              src={product.image}
              alt={product.name}
              sx={{
                width: {
                  xs: "85%",
                  sm: "65%",
                  lg: "85%",
                },
                margin: {
                  xs: "0 auto 0",
                  sm: "-50px auto 0",
                },
              }}
            />
          </Container>
          <Box
            sx={{
              color: "white",
              textTransform: "uppercase",
              textAlign: "center",
              height: 0,
              width: "100%",
              boxShadow: {
                xs: "0px 30px 140px 160px #020408",
                sm: "0px 30px 180px 250px #020408",
              },
              position: "absolute",
              marginTop: {
                xs: "-30px",
                sm: "-70px",
                lg: "-150px",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "44px",
                },
              }}
            >
              {product.name}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: {
                  xs: "8px 22px 8px",
                  sm: "14px 42px 14px",
                },
                borderRadius: "2px",
                mt: {
                  xs: "20px",
                  sm: "32px",
                },
                backgroundColor: "#1BAD93",
                color: "#fff",
                fontWeight: 400,
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "#1BAD93",
                },
                letterSpacing: "0.12em",
                fontSize: {
                  xs: "12px",
                  sm: "16px",
                },
              }}
            >
              <span>Add to Cart</span>&nbsp;| ${product.price}
            </Button>
          </Box>
          <Container
            maxWidth="md"
            sx={{
              paddingLeft: {xs: "30px"},
            }}
          >
            <Box
              sx={{
                mb: {
                  xs: "60px",
                  sm: "100px",
                },
                mt: {
                  xs: "140px",
                  sm: "170px",
                  lg: "110px",
                },
                background:
                  "linear-gradient(90deg, #060217 0.07%, #CCDAFE 52.08%, #060217 99.93%)",
                height: "1px",
              }}
            />
            <Box
              component="ul"
              className="product-details"
              sx={{
                padding: 0,
                color: "white",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },
                gap: {
                  xs: "30px",
                  sm: "40px",
                  lg: "90px",
                },
                margin: 0,
                paddingBottom: "100px",
              }}
            >
              {product?.productDetails.map((detail, index) => {
                return (
                  <Box component="li" key={index}>
                    {detail?.title && (
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 400,
                          lineHeight: "25px",
                          letterSpacing: "0.24em",
                          textAlign: "left",
                          marginBottom: "10px",
                        }}
                      >
                        {detail?.title}
                      </Typography>
                    )}
                    {detail?.description && (
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 300,
                          lineHeight: "21px",
                          letterSpacing: "0em",
                          textAlign: "left",
                        }}
                      >
                        {detail?.description}
                      </Typography>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Container>
        </>
      ) : (
        <p>Loading product data...</p>
      )}
    </>
  );
};

export default Product;
