import { h } from 'virtual-dom';

import form from './form';
import list from './list';

export const render = (state) => {
    return h('div', {}, [form(state),list(state)]);
};