import React from 'react';


export const stopPropagation = (e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
};

export const getTimeNum = () => {
    return (new Date()).getTime();
};