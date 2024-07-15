import { Lexend_Deca } from "next/font/google";
import Image from "next/image";
import HeaderDesktop from '@/images/image-header-desktop.jpg';
import HeaderMobile from '@/images/image-header-mobile.jpg';

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

export default function Card() {

    return (
        <div className="flex m-6 md:flex-row flex-col-reverse justify-center items-center bg-desatBlue text-white rounded-lg max-w-lg md:max-w-6xl overflow-hidden">
            <div className="flex flex-col p-12 h-full w-full justify-center">
                <h1 className="text-center md:text-start font-bold lg:text-3xl md:text-2xl text-3xl mb-8 md:w-10/12">Get <span className="text-softViolet">insights</span> that help your business grow.</h1>
                <p className='text-center md:text-start text-neutral-300 mb-16 md:w-10/12'>Discover the benefits of data analytics and make better decisions regarding revenue, customer
                    experience, and overall efficiency.</p>
                <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center">
                    <p className="flex flex-col items-center md:items-start uppercase text-neutral-300/75"><span className="font-bold lg:text-2xl md:text-xl text-2xl text-white">10k+</span>companies</p>
                    <p className="flex flex-col items-center md:items-start uppercase text-neutral-300/75"><span className="font-bold lg:text-2xl md:text-xl text-2xl text-white">314</span>templates</p>
                    <p className="flex flex-col items-center md:items-start uppercase text-neutral-300/75"><span className="font-bold lg:text-2xl md:text-xl text-2xl text-white">12m+</span>queries</p>
                </div>
            </div>
            <div className='bg-lightViolet w-full h-full object-cover opacity-75'>
                <Image src={HeaderDesktop} className="md:flex hidden mix-blend-multiply w-full h-full object-cover opacity-75"></Image>
                <Image src={HeaderMobile} className="md:hidden flex mix-blend-multiply w-full h-full object-cover opacity-75"></Image>
            </div>
        </div >
    );
}  