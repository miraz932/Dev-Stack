
import FooterLogo from "../assets/logo-text.png"
const Footer = () => {
  return (


    <div className='border-t bg-gray-50  border-gray-200 mt-15'>

      <div className="container mx-auto xl:w-270 ">
        <div className='container mx-auto flex justify-center text-center md:text-start md:justify-between py-6 md:py-5 md:pt-12'>

          <div className='grid gap-2.5 '>
            <div className="flex justify-center md:justify-start">
            <img src={FooterLogo} alt="" />
            </div>
            <p className='text-[#64748B] text-[13px]'>Curated tools, technologies, and resources for developers building <br />
              modern software.</p>
            <div className=' font-medium text-[13px] text-[#3c4756]  mt-2 flex gap-1 justify-center md:justify-start'>
              <h3 className="cursor-pointer">Git Hub</h3>
              <h3 className="cursor-pointer">Twitter</h3>
              <h3 className="cursor-pointer">Link din</h3>
            </div>
          </div>

          <div className='hidden md:block '>
            <h1 className='font-bold'>PRODUCT</h1>
            <div className='text-[#475569] text-[13px]  mt-2 grid gap-1'>
              <p>Home</p>
              <p>Technologies</p>
              <p>Projects</p>
            </div>
          </div>

          <div className='hidden md:block '>
            <h1 className='font-bold'>COMPANY</h1>
            <div className='text-[#475569] text-[13px] mt-2 grid gap-1'>
              <p>About</p>
              <p>Concat</p>
              <p>Careers</p>
            </div>
          </div>

          <div className="md:block hidden">
            <div className=' flex flex-col'>
              <h1 className='font-bold'>LEGAL</h1>
              <div className='text-[#475569] text-[13px]  mt-2 grid gap-1'>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-0">
          <div className="divider"></div>
          <div className="flex justify-between mt-8">
            <p className="text-[#475569] text-[11px] -mt-8">© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-4 text-[11px] -mt-8 text-[#475569]">
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;