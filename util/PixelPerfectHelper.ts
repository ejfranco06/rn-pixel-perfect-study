import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MOCKUP_WIDTH : number = 375
const MOCKUP_HEIGHT : number = 667
export const widthPixels = (pixels : number)  => {
    return wp((pixels / MOCKUP_WIDTH) * 100 + '%');
};

export const heightPixels = (pixels : number)  => {
    return hp((pixels / MOCKUP_HEIGHT) * 100 + '%');
};