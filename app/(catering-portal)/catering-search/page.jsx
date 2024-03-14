import Breadcrumb from '@/components/Breadcrumb';
import Navbar from '@/components/Navbar'
import CateringSearchBar from '@/components/catering/CateringSearchBar';
import Container from '@mui/material/Container';

const page = () => {
  return (
    <>
      <section className='nav-bg'>
        <Navbar cateringHome />
      </section>
      <div className="search-container">
        <div className="container-search">
          <Container maxWidth="md">
            <CateringSearchBar searchLink="/catering-search" />
          </Container>
        </div>
      </div>
      <Breadcrumb title="Search Results" />
    </>
  )
}

export default page