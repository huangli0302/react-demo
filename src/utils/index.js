import Loadable from 'react-loadable';
import React from 'react';
export default (loader) => {
    return Loadable({
        loader,
        loading() {
            return <div>正在加载</div>
        },
    });
}