import React from "react";
import { Box, Typography, Grid, Link, IconButton, Stack } from "@mui/material";
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "2rem 1rem",
        borderTop: "1px solid #ddd",
      }}
    >
      <Grid container spacing={4}>
        {/* Popular Categories */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Popular Categories
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Cars
              </Link>
            </li>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Flats for Rent
              </Link>
            </li>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Mobile Phones
              </Link>
            </li>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Jobs
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Trending Searches */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Trending Searches
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Bikes
              </Link>
            </li>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Watches
              </Link>
            </li>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Books
              </Link>
            </li>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Dogs
              </Link>
            </li>
          </ul>
        </Grid>

        {/* About Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            About Us
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Who We Are
              </Link>
            </li>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" color="text.secondary" underline="hover">
                Blog
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Follow Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              href="#"
              aria-label="Facebook"
              sx={{ color: "#4267B2" }}
            >
              <Facebook />
            </IconButton>
            <IconButton href="#" aria-label="Twitter" sx={{ color: "#1DA1F2" }}>
              <Twitter />
            </IconButton>
            <IconButton
              href="#"
              aria-label="YouTube"
              sx={{ color: "#FF0000" }}
            >
              <YouTube />
            </IconButton>
            <IconButton
              href="#"
              aria-label="Instagram"
              sx={{ color: "#C13584" }}
            >
              <Instagram />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: "1px solid #ddd",
          mt: 4,
          pt: 2,
          textAlign: "center",
          color: "text.secondary",
        }}
      >
        <Typography variant="body2">
          Free Classifieds in Pakistan. © 2006-2022 OLX
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
