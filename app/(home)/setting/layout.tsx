import Link from 'next/link';
import React, { ReactNode } from 'react';

const SettingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>lorem</p>
      <Link href={'/setting/password'}>Ganti password</Link>
      <Link href={'/setting/tema'}>Ganti tema</Link>

      {children}
    </div>
  );
};

export default SettingLayout;
