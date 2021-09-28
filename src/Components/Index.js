import {useState} from 'react';

import Banner from "./Banner";
import BannerEdit from "./BannerEdit";

const IndexBanner = () => {
  const [showBanner, setBanner] = useState(true)
  const onClick = () => {
     setBanner = () => {
        setBanner(!showBanner)
     }
}
  return (
    <div>
      {showBanner && <Banner />  }
    </div>
  );
}

export default IndexBanner;