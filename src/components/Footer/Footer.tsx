import Logo from '../../assets/Logo.png'



const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt='logo' />
                <p className='my-5'>
                Unlock your fitness potential at EvoGym. Our inclusive community, modern facility, and personalized training programs will help you achieve remarkable results. Join us now and embrace a healthier, stronger, and happier you
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Home</p>
                <p className="my-5">Our Classes</p>
                <p>About Us</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">evogym@gmail.com</p>
                <p>+254715012201</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer