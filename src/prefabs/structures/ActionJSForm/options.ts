import {
  model,
  option,
  filter,
  number,
  showIf,
} from '@betty-blocks/component-sdk';

export const options = {
  recordVariable: option('ACTION_JS_VARIABLE', {
    label: 'Record variable',
    value: '',
    configuration: { condition: showIf('recordVariable', 'EQ', 'never') },
  }),
  actionId: option('ACTION_JS', { label: 'Action', value: '' }),
  model: model('Model'),
  filter: filter('Filter', { configuration: { dependsOn: 'model' } }),
  currentRecord: number('Current Record', {
    value: '',
    configuration: { condition: showIf('currentRecord', 'EQ', 'never') },
  }),
};
