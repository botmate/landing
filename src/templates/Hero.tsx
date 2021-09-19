import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/botmate/botmate">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://t.me/botmatechat">
            <a>Support</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">Open source </span>
            {'\n'}
            Telegram bot platform
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://docs.botmate.app">
            <a>
              <Button xl>Setup your BotMate</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
