import {
  prefab,
  component,
  option,
  property,
} from '@betty-blocks/component-sdk';

import { deleteActionVariable } from './hooks/deleteActionVariable';

const attributes = {
  category: 'FORM',
  icon: 'HiddenInputIcon',
};

const options = {
  actionVariableId: option('ACTION_JS_VARIABLE', { label: 'Name', value: '' }),
  value: property('Value'),
};

const hooks = {
  $afterDelete: [deleteActionVariable],
};

export default prefab('HiddenInput', attributes, undefined, [
  component('HiddenInput', { options, ...hooks }, []),
]);
