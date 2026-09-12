
import FooterLogo from "../assets/logo-text.png"
const Footer = () => {
  return (
    <div className='border-t   border-gray-200 mt-15 '>


      <div className="container mx-auto">
        <div className='container mx-auto flex justify-between  py-14'>
          <div className='grid gap-2.5'>
            <img src={FooterLogo} alt="" />
            <p className='text-[#64748B] text-[13px]'>Curated tools, technologies, and resources for developers building <br />
              modern software.</p>
            <div className='flex font-medium gap-2 text-[13px] text-[#475569] '>
              <h3 className="cursor-pointer">Git Hub</h3>
              <h3 className="cursor-pointer">Twitter</h3>
              <h3 className="cursor-pointer">Link din</h3>
            </div>
          </div>

          <div className='grid gap-2.5 '>
            <h1 className='font-bold'>PRODUCT</h1>
            <div className='text-[#475569] text-[14.5px] -mt-2.5'>
              <p>Home</p>
              <p>Technologies</p>
              <p>Projects</p>
            </div>
          </div>

          <div className='grid gap-2.5 '>
            <h1 className='font-bold'>COMPANY</h1>
            <div className='text-[#475569] text-[14.5px] -mt-1'>
              <p>About</p>
              <p>Concat</p>
              <p>Careers</p>
            </div>
          </div>


          <div className=' flex gap-2.5 flex-col'>
            <h1 className='font-bold'>LEGAL</h1>
            <div className='text-[#475569] text-[14.5px]'>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>



        <div className="-mt-6.5 mb-10">
          <div className="divider "></div>
          <div className="flex justify-between mt-6">
            <p className="text-[#475569] -mt-4 text-[11px]">© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-4 text-[11px] -mt-4 text-[#475569]">
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