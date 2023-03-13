import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import ShareButtons from '../../../components/ShareButtons';

export default function FooterWrapper(props) {
  return (
    <>
      <ShareButtons />
      <Footer {...props} />
    </>
  );
}
