import './RotatingRings.css';
import boy from '../../assets/images/boy.png';
import girl from '../../assets/images/girl.png';
import boyLaptop from '../../assets/images/boyLaptop.png';
import folder from '../../assets/images/folder.png';
import hospital from '../../assets/images/hospital.png';
import calendar from '../../assets/images/calender.png';

export default function HeroSection() {
  return (
    <div className='orbitContainer'>
      <div className='orbitViewport'>
        <div className='orbitStage'>
          {/* OUTER RING */}
          <div className='ring ringOuter'>
            <OrbitAvatar img={girl} angle='0deg' />
            <OrbitAvatar img={boy} angle='180deg' />

            {/* decorative icons */}
            <OrbitIcon img={folder} angle='80deg' />
            <OrbitIcon img={hospital} angle='290deg' />
          </div>

          {/* MIDDLE RING */}
          <div className='ring ringMiddle'>
            <OrbitMiddleAvatar img={boy} angle='90deg' />
            <OrbitMiddleAvatar img={girl} angle='270deg' />
          </div>

          {/* INNER RING */}
          <div className='ring ringInner'>
            <OrbitInnerIcon img={calendar} angle='45deg' />
          </div>

          {/* CENTER */}
          <div className='centerAvatar'>
            <div className='centerDots'>
              <CenterDot angle='0deg' color='#9fd3ff' />
              <CenterDot angle='180deg' color='#7d6ce6' />
            </div>

            <img src={boyLaptop} alt='' className='centerImage' />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- helpers ---------------- */

function OrbitIcon({ img, angle }) {
  return (
    <div
      className='orbitIconWrap'
      style={{
        transform: `rotate(${angle}) translateX(calc(var(--outer-size) / 2))`,
      }}>
      <img src={img} alt='' className='orbiticon' />
    </div>
  );
}

function OrbitMiddleAvatar({ img, angle }) {
  return (
    <div
      className='orbitAvatar'
      style={{
        transform: `rotate(${angle}) translateX(calc(var(--middle-size) /2))`,
      }}>
      <img src={img} alt='' />
    </div>
  );
}

function OrbitAvatar({ img, angle }) {
  return (
    <div
      className='orbitAvatar'
      style={{
        transform: `rotate(${angle}) translateX(calc(var(--outer-size) / 2))`,
      }}>
      <img src={img} alt='' className='' />
    </div>
  );
}

function OrbitInnerIcon({ img, angle }) {
  return (
    <div
      className='orbitIconWrap'
      style={{
        transform: `rotate(${angle}) translateX(calc(var(--inner-size) / 2))`,
      }}>
      <img src={img} alt='' className='orbiticon' />
    </div>
  );
}

function CenterDot({ angle, color }) {
  return (
    <div
      className='centerDot'
      style={{
        transform: `rotate(${angle}) translateX(180px)`,
        background: color,
      }}
    />
  );
}
