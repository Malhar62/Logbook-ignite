import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const BASE_HEIGHT = 759.2727;
const BASE_WIDTH = 392.7272;

export const HEIGHT = data => {
    var res = height * data / BASE_HEIGHT;
    return res;
}
export const WIDTH = data => {
    var res = width * data / BASE_WIDTH;
    return res;
}

