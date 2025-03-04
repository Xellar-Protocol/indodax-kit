import {
  AppleDarkIcon,
  AppleIcon,
  GoogleIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon
} from '@/assets/socials';
import { useXellarContext } from '@/providers/indodax-kit';

import { AnimatedContainer, IconWrapper } from '../styled';
import {
  IconsContainer,
  InnerContainer,
  PassportContainer,
  PassportTitle,
  Row,
  Separator,
  SignInButton,
  TextInput
} from './styled';

export function PassportContent() {
  const { theme } = useXellarContext();
  return (
    <AnimatedContainer
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <PassportContainer>
        <PassportTitle style={{ textAlign: 'center' }}>
          The gateway to <span style={{ color: '#01CFEA' }}>manage</span>{' '}
          everything in your <span style={{ color: '#FF1CF7' }}>wallet</span>
        </PassportTitle>

        <InnerContainer>
          <IconsContainer>
            <IconWrapper $size={48} $br={12}>
              <GoogleIcon />
            </IconWrapper>
            <IconWrapper $size={48} $br={12}>
              <TelegramIcon />
            </IconWrapper>
            <IconWrapper $size={48} $br={12}>
              {theme === 'dark' ? <AppleIcon /> : <AppleDarkIcon />}
            </IconWrapper>
            <IconWrapper $size={48} $br={12}>
              <WhatsappIcon />
            </IconWrapper>
            <IconWrapper $size={48} $br={12}>
              <TwitterIcon />
            </IconWrapper>
          </IconsContainer>

          <Row>
            <Separator />
            <span>Or</span>
            <Separator />
          </Row>

          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}
          >
            <TextInput type="email" placeholder="Enter your email" />
            <SignInButton>Sign In</SignInButton>
          </div>
        </InnerContainer>
      </PassportContainer>
    </AnimatedContainer>
  );
}
