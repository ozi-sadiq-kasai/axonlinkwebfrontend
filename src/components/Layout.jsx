import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import WaitingListModal from '../components/WaitingList/WaitingListModal';

import style from './Layout.module.css';

function Layout() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const openWaitlist = () => setShowWaitlist(true);
  const closeWaitlist = () => setShowWaitlist(false);
  return (
    <>
      <header className={style.navbar}>
          <Navbar onOpenWaitlist={openWaitlist} />
      </header>
      <main className={style.main}>
        <Outlet context={{ onOpenWaitlist: openWaitlist }} />
      </main>
      <Footer />

      {showWaitlist && <WaitingListModal onClose={closeWaitlist} />}
    </>
  );
}

export default Layout;
