
import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#4f7b85",
        color: "#fff",
        p: 4,
        mt: 4,
      }}
    >
      <Grid container spacing={4}>
        {/* About Us Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We are committed to providing you with the best online shopping
            experience. Explore our wide range of products at competitive
            prices.
          </Typography>
        </Grid>

        {/* Customer Service Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Customer Service
          </Typography>
          <Link href="/contact" color="inherit" underline="hover">
            Contact Us
          </Link>
          <br />
          <Link href="/faq" color="inherit" underline="hover">
            FAQ
          </Link>
          <br />
          <Link href="/returns" color="inherit" underline="hover">
            Returns
          </Link>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="/shop" color="inherit" underline="hover">
            Shop
          </Link>
          <br />
          <Link href="/about" color="inherit" underline="hover">
            About Us
          </Link>
          <br />
          <Link href="/privacy-policy" color="inherit" underline="hover">
            Privacy Policy
          </Link>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://youtube.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <YouTube />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Footer */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          borderTop: "1px solid #555",
          pt: 2,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} E-Commerce App. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

