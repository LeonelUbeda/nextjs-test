import Container from "../layout/Container";

const Footer = () => {
  return (
    <div className='py-10 border-t border-gray-200'>
      <Container>
        <div className='flex justify-center text-gray-400'>
          <h6>© 2021 Blog de practica. Leonel Ubeda</h6>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
