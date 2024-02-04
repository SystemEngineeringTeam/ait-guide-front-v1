'use client';

import { useState } from 'react';
import AitMap from './_components/aitmap';
import FacilityList from './_components/facilitylist';
import { Penguin } from './_components/penguin';
import Search from './_components/search';
import styles from './page.module.scss';
import { INIT_PICKUP, PickUp } from '@/const/pickup';

export default function Home() {
  const [pickup, setPickup] = useState<PickUp>(INIT_PICKUP);

  return (
    <main className={styles.main}>
      <Search pickup={pickup} setPickup={setPickup} />
      <AitMap pickup={pickup} setPickup={setPickup} />
      <FacilityList pickup={pickup} setPickup={setPickup} />
      <Penguin active={pickup.secret === 1} setPickup={setPickup} />
    </main>
  );
}
