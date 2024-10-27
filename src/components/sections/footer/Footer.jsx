'use client';
import Link from 'next/link';
import { IoIosPhonePortrait } from 'react-icons/io';
import {
  TiLocation,
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialInstagram
} from 'react-icons/ti';
import { useMediaQuery } from 'react-responsive';
import { navLinks } from '../../../constant/navlink';

export function Footer() {
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' });

  return (
    <footer className="flex flex-col items-center justify-center border-t-2 border-primary/30 bg-primary/40 py-4">
      <div className="container mx-auto flex  justify-center gap-8 px-2 lg:gap-48">
        <nav className="">
          <ul className="flex flex-col items-center justify-center">
            <h2 className="pb-4 text-center text-lg font-bold">Menu</h2>
            {navLinks.map((link) => (
              <Link
                className="text-sm hover:text-primary md:text-base"
                key={link.id}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-center  text-sm md:text-base">
          <h3 className="pb-4 text-center font-bold lg:text-left">Contact</h3>
          <div className="flex flex-col">
            <a
              className="flex gap-2 text-sm md:text-base"
              href="tel:+33666666666"
            >
              <IoIosPhonePortrait />
              <p>06 66 66 66 66</p>
            </a>
          </div>
          <div className="flex  gap-2">
            <TiLocation />
            <p className="text-center">
              impasse charles fournier
              <br />
              34560 Baillargues
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-sm md:text-base">
          <h3 className="pb-4 text-center font-bold">
            Nos horaires d&apos;ouverture
          </h3>
          <p>Lundi - Vendredi</p>
          <p>09:00 - 19:00</p>
          <p>Samedi</p>
          <p>09:00 - 17:00</p>
          <p>Dimanche</p>
          <p>Fermé</p>
        </div>
        {!isMobile && (
          <div className="flex flex-col text-sm md:text-base">
            <h3 className="pb-1 text-center font-bold">Suivez-nous</h3>
            <div className="flex flex-col items-center gap-2">
              <Link
                className="w-fit rounded-full  border-2 p-1"
                href="https://www.facebook.com/cliniquedebailargues"
              >
                <TiSocialFacebook size={28} className="" />
              </Link>
              <Link
                className="w-fit rounded-full border-2 p-1"
                href="https://www.google.com"
              >
                <TiSocialGooglePlus size={28} className="" />
              </Link>
              <Link
                href="https://www.instagram.com/cliniquedebailargues"
                className="w-fit rounded-full border-2 p-1"
              >
                <TiSocialInstagram size={28} className="" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex w-11/12 flex-col items-center justify-center  border-t-2 border-primary/30 p-4 text-center">
        {isMobile && (
          <div className="flex flex-col text-sm md:text-base">
            <h3 className="pb-1 text-center font-bold">Suivez-nous</h3>
            <div className="flex gap-2">
              <Link
                className="rounded-full border-2 p-1"
                href="https://www.facebook.com/cliniquedebailargues"
              >
                <TiSocialFacebook size={34} className="" />
              </Link>
              <Link
                className="rounded-full border-2 p-1"
                href="https://www.google.com"
              >
                <TiSocialGooglePlus size={34} className="" />
              </Link>
              <Link
                href="https://www.instagram.com/cliniquedebailargues"
                className="rounded-full border-2 p-1"
              >
                <TiSocialInstagram size={34} className="" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <p className="text-center text-sm">
          &copy; 2024 Clinique Vétérinaire de Baillargues. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
