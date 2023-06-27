import React from 'react';
import Link from 'next/link';

type nav = {
    name: string;
    to?: string;
    children: string;
    className: string;
}

type navData = {
    [key: string]: nav;
}

export default function Menu(navData: navData) {
    return Object.keys(navData).map((key) => {
        const item = navData[key];
        let tag: any = Link;
        const tagProps: { href?: string } = {};
        
        if (item.to?.match(/\//g)) {
            tagProps.href = item.to;
            tag = 'a';
            delete item.to;
        }

        return React.createElement(
            tag,
            { ...item, ...tagProps, key: key },
            navData[key].children
        );
    });
}

