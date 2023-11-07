import {IRectSize} from "./interfaces.ts";

const borderColor: string = '#C2C2C2';
const width: number = window.innerWidth;
const height: number = window.innerHeight;

const branchSize: IRectSize = {
    width: (width - 140) / 3,
    height: (height - 140) / 3
};

const unitSize: IRectSize = {
    width: (branchSize.width - 40) / 4,
    height: (branchSize.height - 40) / 4
};


export {
    borderColor,
    width,
    height,
    branchSize,
    unitSize
}
