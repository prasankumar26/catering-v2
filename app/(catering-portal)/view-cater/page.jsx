import Breadcrumb from '@/components/Breadcrumb';
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShowAllImages from '@/components/ShowAllImages';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CardContent from '@mui/material/CardContent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EditNoteIcon from '@mui/icons-material/EditNote';
import GroupIcon from '@mui/icons-material/Group';
import TimelineIcon from '@mui/icons-material/Timeline';
import SimilarCaterers from '@/components/cards/SimilarCaterers';
import ReciewCards from '@/components/cards/ReciewCards';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';


const index = () => {
  return (
    <>
      <section className='nav-bg'>
        <Navbar cateringHome />
      </section>
      <div className="search-container">
        <div className="container-search">
          <Container maxWidth="md">
            <SearchBar searchLink="/catering-search" />
          </Container>
        </div>
      </div>
      <Breadcrumb title="Saravana Catering Service" />

      <Container maxWidth="lg">
        <Stack sx={{ marginTop: '20px' }} direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }} alignItems="center" justifyContent="space-between">
          <div>
            <Stack direction="row" alignItems="center" spacing={2}>
              <h2 className="vc-heading">Saravana Catering Service </h2>
              <span className='vc-chip'>Branded Caterer</span>
            </Stack>
            <h3 className="vc-address">No.65, Nehru Road, 8th Cross Street, Near kalyan Nagar Post, Bangalore - 560084</h3>
          </div>
          <div className='vc-icon-box'>
            <Stack direction='row' justifyContent="space-between">
              <Stack direction="row" alignItems="center" spacing={1} className="vc-icons"> <ShareIcon style={{ fontSize: '18px' }} /> <span>Share</span></Stack>
              <Stack direction="row" alignItems="center" spacing={1} className="vc-icons"> <FavoriteBorderIcon style={{ fontSize: '18px' }} /> <span>Save</span></Stack>
              <Stack direction="row" alignItems="center" spacing={1} className="vc-icons-btn"> <LocationOnIcon style={{ fontSize: '14px' }} /> <span className="font-12">Show On Map</span></Stack>
            </Stack>
          </div>
        </Stack>

        <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <ShowAllImages />
        </Box>

        <Box sx={{ flexGrow: 1 }} className="mb-4">
          <Grid container spacing={2}>
            <Grid item sm={12} lg={7}>
              <Stack direction="row" alignItems="center" spacing={1} className="mb-4">
                <h2 className="food-type">Food Type : </h2> <Stack direction="row" spacing={1}>
                  <span className="vc-green-box"></span> <span className="veg-green" style={{ marginRight: '6px' }}>Veg</span> & <span className="vc-gray-box"></span>
                  <span className="food-type-non-veg font-16">Non-Veg</span> </Stack>
              </Stack>
              <h2 className="vc-cater">Cuisines We Cater</h2>
              <h2 className="vc-locations">South Indian, North Indian, Hyderabadi, Mangaloreian, Chettinad & Chinese</h2>
            </Grid>
            <Grid item sm={12} lg={5}>
              <Stack direction="column" alignContent="end" alignItems="end" justifyContent="end">
                <Stack direction="row" alignItems="center" className="mb-4">
                  <span className="vc-price">Starting Price / Plate -</span>
                  <Stack direction="row" alignItems="center" spacing={0}>
                    <CurrencyRupeeIcon className="vc-price-one" /> <span className="vc-price-one"> 250</span>
                  </Stack>
                </Stack>
                <p className="vc-reviews">See Reviews (352)</p>
                <Stack direction="row" spacing={2} style={{ marginTop: '10px' }}>
                  <Button variant="contained" className="vt-whatsapp-btn"> <WhatsAppIcon style={{ marginRight: '3px' }} /> Whatsapp</Button>
                  <Button variant="contained" className="vc-contact-btn">Contact Now</Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ marginTop: '30px', marginBottom: '30px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={2.5}>
            <div className="vc-shadow">
              <CardContent>
                <div className="text-center">
                  <FastfoodIcon className="vc-icon-label" />
                  <p className="vc-service-type">Service Type</p>
                  <h3 className="vc-service-heading">Table & Buffet Service</h3>
                </div>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={2.5}>
            <div className="vc-shadow">
              <CardContent>
                <div className="text-center">
                  <EditNoteIcon className="vc-icon-label" />
                  <p className="vc-service-type">Min & Max Order Quantity</p>
                  <h3 className="vc-service-heading">100 - 7000 Plates</h3>
                </div>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <div className="vc-shadow">
              <CardContent>
                <div className="text-center">
                  <AccessTimeIcon className="vc-icon-label" />
                  <p className="vc-service-type">Working Hours</p>
                  <h3 className="vc-service-heading">Monday - Saturday 8am - 10pm</h3>
                </div>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={2}>
            <div className="vc-shadow">
              <CardContent>
                <div className="text-center">
                  <GroupIcon className="vc-icon-label" />
                  <p className="vc-service-type">Total No. of Staffs</p>
                  <h3 className="vc-service-heading">50</h3>
                </div>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={2}>
            <div className="vc-shadow">
              <CardContent>
                <div className="text-center">
                  <TimelineIcon className="vc-icon-label" />
                  <p className="vc-service-type">Working Since</p>
                  <h3 className="vc-service-heading">1987</h3>
                </div>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" style={{ marginTop: '30px', marginBottom: '30px' }}>
        <h3 className="vc-about-us">About Us</h3>
        <p className="vc-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sit corrupti laboriosam eum inventore delectus. Ea placeat temporibus perferendis voluptatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sit corrupti laboriosam eum inventore delectus. Ea placeat temporibus perferendis voluptatibus!</p>

        <h3 className="vc-about-us" style={{ marginTop: '20px' }}>Our Branches</h3>
        <p className="vc-para"> Chennai, Madurai, Coaimbatore, Theni, Dindugal, Kerala... <span className="text-red view-all">View all</span> </p>
      </Container>

      <Container maxWidth="xl" style={{ marginTop: '30px', marginBottom: '30px' }}>
        <div>
          <h2 className="text-center mx-auto vc-gallery"> Our Gallery </h2>
          <div className="vc-row">
            <div className="vc-column">
              <img src="/img/occasions/03.jpg" />
              <img src="/img/occasions/04.jpg" />
              <img src="/img/occasions/05.jpg" />
              <img src="/img/occasions/06.jpg" />
            </div>
            <div className="vc-column">
              <img src="/img/occasions/01.jpg" />
              <img src="/img/occasions/09.jpg" />
              <img src="/img/occasions/02.jpg" />
              <img src="/img/occasions/07.jpg" />
            </div>
            <div className="vc-column">
              <img src="/img/occasions/03.jpg" />
              <img src="/img/occasions/04.jpg" />
              <img src="/img/occasions/05.jpg" />
              <img src="/img/occasions/06.jpg" />
            </div>
            <div className="vc-column">
              <img src="/img/occasions/10.jpg" />
              <img src="/img/occasions/09.jpg" />
              <img src="/img/occasions/11.jpg" />
              <img src="/img/occasions/07.jpg" />
            </div>
          </div>
        </div>
      </Container>

      <SimilarCaterers />

      <ReciewCards />

      <Subscribe />
      <Footer />

    </>
  )
}

export default index